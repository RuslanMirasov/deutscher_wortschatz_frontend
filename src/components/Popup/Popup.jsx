import ReactDOM from 'react-dom';
import { CloseButton } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import PopupError from './PopupError';
import PopupConfirm from './PopupConfirm';
import PopupRequest from './PopupRequest';
import PopupCallback from './PopupCallback';
import PopupLogin from './PopupLogin';
import PopupRegistration from './PopupRegistration';
import './Popup.scss';

const popupInfos = {
  errorTitle: 'Autsch...',
  errorText: 'Offenbar ist etwas nicht ganz nach Plan gelaufen :(',

  confirmTitle: 'Die Bewerbung ist abgeschickt!',
  confirmText: 'Wir werden Ihre Bewerbung so schnell wie möglich bearbeiten.',

  requestTitle: 'Anfrage versenden',
  requestText: 'Füllen Sie das Formular aus und unser Manager wird Sie so schnell wie möglich kontaktieren.',
};

const Popup = () => {
  const { isPopupLoading, isOpenPopup, popupType, popupTitle, popupText, popupClose } = usePopup();

  const popupContentClasses = {
    'popup-content': true,
    'type-login': popupType === 'login',
    'type-registration': popupType === 'registration',
    'type-request': popupType === 'request',
    'type-callback': popupType === 'callback',
    'type-error': popupType === 'error',
    'type-confirm': popupType === 'confirm',
    'is-loading': isPopupLoading,
  };

  const currentPopupContentClasses = Object.keys(popupContentClasses)
    .filter(key => popupContentClasses[key])
    .join(' ');

  return ReactDOM.createPortal(
    <>
      {isOpenPopup && (
        <div className="popup" onClick={popupClose}>
          <div className={currentPopupContentClasses} onClick={e => e.stopPropagation()}>
            <CloseButton onClick={popupClose} />
            {popupType === 'error' && (
              <PopupError title={popupTitle === '' ? popupInfos.errorTitle : popupTitle} text={popupText === '' ? popupInfos.errorText : popupText} />
            )}
            {popupType === 'confirm' && (
              <PopupConfirm
                title={popupTitle === '' ? popupInfos.confirmTitle : popupTitle}
                text={popupText === '' ? popupInfos.confirmText : popupText}
              />
            )}
            {popupType === 'request' && (
              <PopupRequest
                title={popupTitle === '' ? popupInfos.requestTitle : popupTitle}
                text={popupText === '' ? popupInfos.requestText : popupText}
              />
            )}
            {popupType === 'callback' && <PopupCallback />}
            {popupType === 'login' && <PopupLogin />}
            {popupType === 'registration' && <PopupRegistration />}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Popup;
