import css from './Text.module.scss';

const Text = ({ size, children }) => {
  const textClasses = {
    [css.Text]: true,
    [css.Big]: size === 'big',
    [css.Small]: size === 'small',
  };
  return (
    <p
      className={Object.keys(textClasses)
        .filter(key => textClasses[key])
        .join(' ')}
    >
      {children}
    </p>
  );
};

export default Text;
