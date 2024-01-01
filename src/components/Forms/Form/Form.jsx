import React from 'react';
import css from './Form.module.scss';

const Form = ({ method = 'post', onSubmit, children }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form action="#" method={method} className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
