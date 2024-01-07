import Menu from 'components/Menu/Menu';
import css from './Navigation.module.scss';
import { usePopup } from 'contexts/PopupContext';
import { Button, ButtonsList } from 'components/Buttons';
import Icon from 'components/Icon/Icon';

const Navigation = () => {
  const { isOpenMenu, menuToggle } = usePopup();

  return (
    <nav className={`${css.Overlay} ${isOpenMenu ? css.isOpen : ''}`} onClick={menuToggle}>
      <div className={`${css.Navigation} ${isOpenMenu ? css.isOpen : ''}`} onClick={e => e.stopPropagation()}>
        <Menu />
        <ButtonsList>
          <Button size="small" onClick={menuToggle}>
            <Icon name="error" size="20" />
          </Button>
          <Button size="small" onClick={menuToggle}>
            <Icon name="confirm" size="20" />
          </Button>
          <Button size="small" onClick={menuToggle}>
            <Icon name="logo" size="20" />
          </Button>
        </ButtonsList>
      </div>
    </nav>
  );
};

export default Navigation;
