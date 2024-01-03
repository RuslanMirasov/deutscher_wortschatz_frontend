import React from 'react';
import { useState } from 'react';
import css from './Form.module.scss';

const Form = ({ method = 'post', onSubmit, children }) => {
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!isValid) {
      return;
    }
    setIsValid(true);
    onSubmit();
  };

  return (
    <form action="#" method={method} className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
