import css from './Header.module.scss';
import Logo from 'components/Logo/Logo';

const Header = ({ children }) => {
  return (
    <header className={css.Header}>
      <div className="container">
        <Logo />
        {children}
      </div>
    </header>
  );
};

export default Header;
