import { Link } from 'react-router-dom';
import { usePopup } from 'contexts/PopupContext';
import css from './Menu.module.scss';

const Menu = () => {
  const { menuClose, popupOpen } = usePopup();

  const handleClick = () => {
    menuClose();
  };

  return (
    <ul className={`${css.Menu} custom-scrollbar`}>
      <li>
        <Link to="./books" onClick={handleClick}>
          Books
        </Link>
        <ul>
          <li>
            <Link to="./books" onClick={handleClick}>
              Books
            </Link>
          </li>
          <li>
            <Link to="./books/1" onClick={handleClick}>
              One book
            </Link>
          </li>
          <li>
            <Link to="./books/444/444" onClick={handleClick}>
              Contacts
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="./books/1" onClick={handleClick}>
          One book
        </Link>
      </li>
      <li>
        <Link onClick={() => popupOpen('callback')}>Contacts</Link>
      </li>
    </ul>
  );
};

export default Menu;
