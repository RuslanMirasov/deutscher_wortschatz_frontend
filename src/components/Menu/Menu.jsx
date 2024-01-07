import { usePopup } from 'contexts/PopupContext';
import { useEffect } from 'react';
import { addArrowsToMultipleLinks, calculateHeightOfInnerUl } from 'utils/menuFunctions';
import MenuLink from './MenuLink';
import css from './Menu.module.scss';

const Menu = () => {
  const { popupOpen } = usePopup();

  useEffect(() => {
    addArrowsToMultipleLinks(css.Menu, css.More, handleArrowClick);
  }, []);

  const handleArrowClick = e => {
    const innerLi = e.target.closest('li');
    const innerUl = innerLi.querySelector('ul');
    innerLi.classList.toggle(css.Open);
    if (!innerLi.classList.contains(css.Open)) {
      innerUl.style.height = `${calculateHeightOfInnerUl(innerUl)}px`;
      setTimeout(() => {
        innerUl.style.height = '0px';
      }, 10);
      return;
    }
    innerUl.style.height = `${calculateHeightOfInnerUl(innerUl)}px`;
    setTimeout(() => {
      innerUl.style.height = 'auto';
    }, 600);
  };

  return (
    <ul className={`${css.Menu} custom-scrollbar`}>
      <MenuLink to="./" text="Startseite" />
      <MenuLink to="./books" text="Bücher">
        <ul>
          <MenuLink to="./books/book" text="Schritte plus neu A1.1" />
          <MenuLink to="./books/book" text="Schritte plus neu A1.2" />
          <MenuLink to="./books/book" text="Schritte plus neu A2.1" />
          <MenuLink to="./books/book" text="Schritte plus neu A2.2">
            <ul>
              <MenuLink to="./books/book" text="Thema 1" />
              <MenuLink to="./books/book" text="Thema 2" />
              <MenuLink to="./books/book" text="Thema 3" />
              <MenuLink to="./books/book" text="Thema 4" />
            </ul>
          </MenuLink>
          <MenuLink to="./books/book" text="Schritte plus neu B1.1" />
          <MenuLink to="./books/book" text="Schritte plus neu B1.2" />
          <MenuLink to="./books/book" text="Schritte für schritte zum DTZ" />
          <MenuLink to="./books/book" text="Einfach besser 500 B2 Beruf" />
        </ul>
      </MenuLink>
      <MenuLink to="./books" text="Regeln" />
      <MenuLink onClick={() => popupOpen('callback')} text="Kontakt" />
    </ul>
  );
};

export default Menu;
