import { useState } from 'react';
import { validateInput } from 'utils/validateInput';
import css from './Input.module.scss';

const Input = ({ type, name, required, label, placeholder, onChange }) => {
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showErrorText] = useState(true);

  const handleChange = e => {
    setInputValue(e.target.value);
    const errorText = validateInput(e.target);
    onChange(e);
    if (errorText) {
      setError(errorText);
      return;
    }
    setError(null);
  };

  return (
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
  );
};

export default Input;
