import { Link } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={css.Wrapper}>
      <ul className={css.Navigation}>
        <li>
          <Link to="./books">Books</Link>
        </li>
        <li>
          <Link to="./books/1">One book</Link>
        </li>
        <li>
          <Link to="./books/444/444">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
