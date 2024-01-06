import { useState } from 'react';
import css from './Burger.module.scss';

const Burger = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" className={`${css.Burger} ${isOpen ? css.isOpen : ''}`} onClick={handleClick}>
      <span>
        <b hidden>Open menu</b>
      </span>
    </button>
  );
};

export default Burger;
