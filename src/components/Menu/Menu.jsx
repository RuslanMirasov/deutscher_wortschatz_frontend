import { Link } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import css from './Menu.module.scss';

const Menu = ({ children }) => {
  const { menuToggle } = usePopup();
  return (
    <ul className={css.Menu}>
      <li>
        <Link to="./books" onClick={menuToggle}>
          Books
        </Link>
      </li>
      <li>
        <Link to="./books/1" onClick={menuToggle}>
          One book
        </Link>
      </li>
      <li>
        <Link to="./books/444/444" onClick={menuToggle}>
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
