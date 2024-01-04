import { useState } from 'react';
import { validateInput } from 'utils/formFunctions';
import css from './Input.module.scss';
import './inputValidation.scss';

const Input = ({ type, name, required, label, placeholder, value }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
    validateInput(e.target);
  };

  return (
    <>
      {type === 'text' || type === 'email' || type === 'tel' || type === 'password' ? (
        <label className={css.Label}>
          {label && <span className={css.LabelText}>{label}</span>}
          <span className={css.LabelInput}>
            <input
              type={type}
              className={css.Input}
              name={name}
              value={inputValue}
              required={required}
              placeholder={placeholder}
              onChange={handleChange}
            />
          </span>
        </label>
      ) : type === 'hidden' ? (
        <input type={type} name={name} value={value} />
      ) : type === 'textarea' ? (
        <label className={css.Label}>
          {label && <span className={css.LabelText}>{label}</span>}
          <span className={css.LabelInput}>
            <textarea
              className={`${css.Input} ${css.Textarea}`}
              name={name}
              value={inputValue}
              required={required}
              placeholder={placeholder}
              onChange={handleChange}
            />
          </span>
        </label>
      ) : null}
    </>
  );
};

export default Input;
