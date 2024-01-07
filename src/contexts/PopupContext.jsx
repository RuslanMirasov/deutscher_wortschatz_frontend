import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { bodyLock, bodyUnlock, showPopup, hidePopup } from 'utils/popupFunctions';

const defaultPopupType = 'request';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [popupType, setPopupType] = useState(defaultPopupType);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupText, setPopupText] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        escapeActions();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const escapeActions = () => {
    if (isOpenPopup) {
      popupClose();
      return;
    }
    menuClose();
  };

  const setLoading = () => {
    setIsPopupLoading(true);
  };

  const unsetLoading = () => {
    setIsPopupLoading(false);
  };

  const menuToggle = () => {
    bodyLock(window.innerWidth - document.body.clientWidth);
    setIsOpenMenu(!isOpenMenu);
    if (isOpenMenu) {
      bodyUnlock();
    }
  };

  const menuClose = () => {
    setIsOpenMenu(false);
    bodyUnlock();
  };

  const popupOpen = (type, title, text) => {
    setIsOpenPopup(true);
    if (!isOpenMenu || !isOpenPopup) {
      bodyLock(window.innerWidth - document.body.clientWidth);
    }
    setPopupType(type);
    title && setPopupTitle(title);
    text && setPopupText(text);
    setTimeout(() => {
      showPopup();
    }, 1);
  };

  const popupClose = () => {
    hidePopup();
    setTimeout(() => {
      setIsOpenPopup(false);
      setPopupType(defaultPopupType);
      setPopupTitle('');
      setPopupText('');
      if (!isOpenMenu) {
        bodyUnlock();
      }
    }, 310);
  };

  return (
    <PopupContext.Provider
      ref={containerRef}
      value={{
        isPopupLoading,
        isOpenPopup,
        isOpenMenu,
        popupType,
        popupTitle,
        popupText,
        setLoading,
        unsetLoading,
        popupClose,
        popupOpen,
        menuToggle,
        menuClose,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
