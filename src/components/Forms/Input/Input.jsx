import { useState } from 'react';
import { validateInput } from 'utils/validateInput';
import css from './Input.module.scss';

const Input = ({ type, name, required, label, placeholder }) => {
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showErrorText] = useState(true);

  const handleChange = e => {
    setInputValue(e.target.value);
    const errorText = validateInput(e.target);
    if (errorText) {
      setError(errorText);
      return;
    }
    setError(null);
  };

  return (
    <>
      {type === 'text' || type === 'email' || type === 'tel' || type === 'password' ? (
        <label className={css.Label}>
          {label && <span className={css.LabelText}>{label}</span>}
          <span className={css.LabelInput}>
            <input
              type={type}
              className={`${css.Input} ${error ? `${css.Invalid} invalid` : inputValue ? css.Valid : ''}`}
              name={name}
              value={inputValue}
              required={required}
              placeholder={placeholder}
              onChange={handleChange}
            />
          </span>
          {showErrorText && error && <span className={css.LabelError}>{error}</span>}
        </label>
      ) : type === 'hidden' ? (
        <input type={type} name={name} value={inputValue} />
      ) : null}
    </>
  );
};

export default Input;
