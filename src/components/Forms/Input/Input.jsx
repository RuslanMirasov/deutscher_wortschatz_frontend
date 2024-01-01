import { useState } from 'react';
import { validateInput } from 'utils/validateInput';
import css from './Input.module.scss';

const Input = ({ type, name, value, required, label, placeholder }) => {
  const [error, setError] = useState();
  const [showErrorText] = useState(true);

  const handleChange = e => {
    const errorText = validateInput(e.target);
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
          className={css.Input}
          name={name}
          value={value ? value : undefined}
          required={required ? true : undefined}
          placeholder={placeholder ? placeholder : undefined}
          onChange={handleChange}
        />
      </span>
      {showErrorText && error && <span className={css.LabelError}>{error}</span>}
    </label>
  );
};

export default Input;
