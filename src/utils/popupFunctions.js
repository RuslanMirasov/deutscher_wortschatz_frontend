const bodyEl = document.querySelector('.body');

const setPaddingsToFixedElements = scrollbar => {
  const fixedElements = [].filter.call(document.all, e => getComputedStyle(e).position === 'fixed');
  bodyEl.style.paddingRight = `${scrollbar}px`;
  fixedElements.forEach(fix => {
    if (!fix.classList.contains('popup')) {
      fix.style.paddingRight = `${scrollbar}px`;
    }
  });
};

export const getScrollbarWidth = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export const bodyLock = scrollbar => {
  bodyEl.classList.add('locked');
  setPaddingsToFixedElements(scrollbar);
};

export const bodyUnlock = () => {
  bodyEl.classList.remove('locked');
  setPaddingsToFixedElements(0);
};

export const showPopup = e => {
  const popupEl = document.querySelector('.popup');
  popupEl.classList.add('is-open');
};

export const hidePopup = () => {
  const popupEl = document.querySelector('.popup');
  popupEl.classList.remove('is-open');
};
