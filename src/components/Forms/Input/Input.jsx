import { useState } from 'react';
import { validateInput } from 'utils/formFunctions';
import css from './Input.module.scss';
import './inputValidation.scss';

const Input = ({ type, name, required, label, placeholder, value = '', checked = false }) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputChecked, setInputChecked] = useState(checked);

  const handleChange = e => {
    setInputChecked(e.target.checked);
    setInputValue(e.target.value);
    validateInput(e.target);
  };

  let inputMarkup = (
    <label className={css.Label}>
      {label && <span className={css.LabelText}>{label}</span>}
      <span className={css.LabelInput}>
        <input
          type={type}
          className={css.Input}
          name={name}
          value={inputValue}
          checked={inputChecked}
          required={required}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </span>
    </label>
  );

  if (type === 'hidden') {
    inputMarkup = <input type={type} name={name} value={value} />;
  }

  if (type === 'textarea') {
    inputMarkup = (
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
    );
  }

  if (type === 'checkbox') {
    inputMarkup = (
      <label className={css.Label}>
        <input className={css.Radio} type={type} name={name} value={inputValue} required={required} checked={inputChecked} onChange={handleChange} />
        {label && <span className={css.RadioLabel}>{label}</span>}
        <div className={`${css.Mark} ${css[`mark-${type}`]}`}></div>
      </label>
    );
  }

  if (type === 'radio') {
    inputMarkup = (
      <label className={css.Label}>
        <input className={css.Radio} type={type} name={name} value={inputValue} required={required} onChange={handleChange} />
        {label && <span className={css.RadioLabel}>{label}</span>}
        <div className={`${css.Mark} ${css[`mark-${type}`]}`}></div>
      </label>
    );
  }

  return inputMarkup;
};

export default Input;
