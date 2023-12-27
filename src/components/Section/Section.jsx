import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
