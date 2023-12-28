import ReactDOM from 'react-dom';
import css from './Popup.module.scss';

const Popup = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={`${css.Popup} ${css.isOpen}`}>
      <button className={css.PopupClose} onClick={onClose}>
        Закрыть
      </button>
      <h2>Заголовок</h2>
      <p>Описание</p>
    </div>,
    document.body
  );
};

export default Popup;
