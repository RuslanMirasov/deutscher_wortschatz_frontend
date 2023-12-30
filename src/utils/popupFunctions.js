export const bodyLock = () => {
  const bodyEl = document.querySelector('.body');
  bodyEl.classList.add('locked');
};

export const bodyUnlock = () => {
  const bodyEl = document.querySelector('.body');
  bodyEl.classList.remove('locked');
};

export const showPopup = e => {
  const popupEl = document.querySelector('.popup');
  popupEl.classList.add('is-open');
};

export const hidePopup = () => {
  const popupEl = document.querySelector('.popup');
  popupEl.classList.remove('is-open');
};
