import { useState } from 'react';
import { validateForm } from 'utils/formValidation';
import css from './Form.module.scss';

const Form = ({ method = 'post', onSubmit, children }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const isFormValid = validateForm(form);
    if (Object.keys(isFormValid).length > 0) {
      console.log(isFormValid);
      return;
    }
    onSubmit();
  };

  return (
    <form action="#" method={method} className={css.Form} noValidate onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
