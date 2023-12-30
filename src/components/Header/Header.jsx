import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';

const Header = ({ children }) => {
  const { popupOpen } = usePopup();
  return (
    <header className={css.Header}>
      <div className={css.Container}>
        <Logo />
        <Button size="small" variant="border-dark" onClick={() => popupOpen('login')}>
          Anmeldung
        </Button>
        {children}
      </div>
    </header>
  );
};

export default Header;
