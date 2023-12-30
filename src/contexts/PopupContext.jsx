import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { bodyLock, bodyUnlock, showPopup, hidePopup, getScrollbarWidth } from 'utils/popupFunctions';

const defaultPopupType = 'request';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isPopupLoading, setIsPopupLoading] = useState(false);
  const [popupType, setPopupType] = useState(defaultPopupType);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupText, setPopupText] = useState('');
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const width = getScrollbarWidth();
    setScrollbarWidth(width);
  }, []);

  const setLoading = () => {
    setIsPopupLoading(true);
  };

  const unsetLoading = () => {
    setIsPopupLoading(false);
  };

  const popupClose = () => {
    hidePopup();
    setTimeout(() => {
      setIsOpenPopup(false);
      setPopupType(defaultPopupType);
      setPopupTitle('');
      setPopupText('');
      bodyUnlock();
    }, 310);
  };

  const popupOpen = (type, title, text) => {
    setIsOpenPopup(true);
    bodyLock(scrollbarWidth);
    setPopupType(type);
    title && setPopupTitle(title);
    text && setPopupText(text);
    setTimeout(() => {
      showPopup();
    }, 10);
  };

  return (
    <PopupContext.Provider
      ref={containerRef}
      value={{ isPopupLoading, isOpenPopup, popupType, popupTitle, popupText, setLoading, unsetLoading, popupClose, popupOpen }}
    >
      {children}
    </PopupContext.Provider>
  );
};
