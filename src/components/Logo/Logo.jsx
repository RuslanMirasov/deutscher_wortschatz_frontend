import css from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <img src={logo} alt="logo" />
      <div className={css.LogoText}>
        <p>Deutscher</p>
        <span>Wortschatz</span>
      </div>
    </NavLink>
  );
};

export default Logo;
