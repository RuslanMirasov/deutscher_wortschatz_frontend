const regExpName = /[^A-zА-яЁё+ ()-]/;
const regExpPhone = /[^0-9+ ()-]/;
const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errors = {
  empty: 'The field is empty!',
  name: 'Name cannot contain digits!',
  phone: 'Wrong phone format!',
  email: 'Wrong E-mail format!',
};

export const validateForm = formId => {
  const errorsList = {};
  formId.querySelectorAll('[required]').forEach(required => {
    if (required.value.length === 0) {
      errorsList[required.name] = errors.empty;
    } else {
      //Name
      if (required.name === 'name' && regExpName.test(required.value)) {
        errorsList[required.name] = errors.name;
      }
      //type tel
      if (required.type === 'tel' && regExpPhone.test(required.value)) {
        errorsList[required.name] = errors.phone;
      }
      //email
      if (required.type === 'email' && regExpEmail.test(required.value)) {
        errorsList[required.name] = errors.email;
      }
    }
  });
  return errorsList;
};
