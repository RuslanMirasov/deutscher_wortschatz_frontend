import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children  }) => {
   return (
      <section className={css.section}>
         <div className={css.container}>
            {title && (<h2 className={css.sectionTitle}>{title}</h2>)}
            {children}
         </div>
      </section>
   )
}

Section.propTypes = {
   title: PropTypes.string,
}