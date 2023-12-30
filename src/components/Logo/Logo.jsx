import css from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import Icon from 'components/Icon/Icon';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <Icon name="logo" size={26} />
      <div className={css.LogoText}>
        <p>Deutscher</p>
        <span>Wortschatz</span>
      </div>
    </NavLink>
  );
};

export default Logo;
