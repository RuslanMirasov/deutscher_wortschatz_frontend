const refs = {
  body: document.querySelector('.body'),
  header: document.querySelector('.header'),
  burger: document.querySelector('.burger'),
  popup: document.querySelector('.popup'),
  fixedElements: [].filter.call(document.all, e => getComputedStyle(e).position === 'fixed'),
};

export default refs;
