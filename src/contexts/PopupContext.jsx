import { createContext, useContext, useState } from 'react';
import { bodyLock, bodyUnlock, showPopup, hidePopup } from 'utils/popupFunctions';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupType, setPopupType] = useState('request'); // request registration callback error confirm
  const [popupTitle, setPopupTitle] = useState('Bewerbung');
  const [popupText, setPopupText] = useState('Füllen Sie das Formular aus und unser Manager wird Sie so schnell wie möglich kontaktieren');

  const popupClose = () => {
    hidePopup();
    setTimeout(() => {
      setIsOpenPopup(false);
      bodyUnlock();
    }, 300);
  };

  const popupOpen = (type, title, text) => {
    setIsOpenPopup(true);
    bodyLock();
    setPopupType(type);
    setPopupTitle(title);
    setPopupText(text);
    setTimeout(() => {
      showPopup();
    }, 10);
  };

  return <PopupContext.Provider value={{ isOpenPopup, popupType, popupTitle, popupText, popupClose, popupOpen }}>{children}</PopupContext.Provider>;
};
