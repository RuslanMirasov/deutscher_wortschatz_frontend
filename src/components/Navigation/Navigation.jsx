import Menu from 'components/Menu/Menu';
import css from './Navigation.module.scss';
import { usePopup } from 'contexts/PopupContext';

const Navigation = () => {
  const { isOpenMenu, menuToggle } = usePopup();

  return (
    <nav className={`${css.Overlay} ${isOpenMenu ? css.isOpen : ''}`} onClick={menuToggle}>
      <div className={`${css.Navigation} ${isOpenMenu ? css.isOpen : ''}`} onClick={e => e.stopPropagation()}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navigation;
