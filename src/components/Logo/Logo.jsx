import css from './Logo.module.css';
import logo from 'img/logo.svg';

const Logo = () => {
  return (
    <a href="./" className={css.Logo}>
      <img src={logo} alt="logo" />
      <div className={css.LogoText}>
        <p>Deutscher</p>
        <span>Wortschatz</span>
      </div>
    </a>
  );
};

export default Logo;
