import css from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <section className={css.Section}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
