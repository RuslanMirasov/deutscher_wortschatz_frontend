import css from './Input.module.scss';

const Input = ({ type, name, value, required, label, placeholder, onChange }) => {
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
          onChange={onChange}
        />
      </span>
    </label>
  );
};

export default Input;
