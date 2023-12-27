import css from './Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <footer className={css.Footer}>
      <div className={css.Container}>{children}</div>
    </footer>
  );
};

export default Footer;
