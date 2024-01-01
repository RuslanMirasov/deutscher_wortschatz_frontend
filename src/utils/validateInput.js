const regExpName = /[^A-zА-яЁё+ ()-]/;
const regExpPhone = /^\+49\d{10}$/;
const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const errors = {
  empty: 'The field is empty!',
  name: 'Name cannot contain digits!',
  phone: 'Wrong phone format!',
  email: 'Wrong E-mail format!',
};

export const validateInput = input => {
  let errorsText = '';

  if (input.value.length === 0) {
    errorsText = errors.empty;
  } else {
    //Name
    if (input.name === 'name' && regExpName.test(input.value)) {
      errorsText = errors.name;
    }
    //type tel
    if (input.type === 'tel' && regExpPhone.test(input.value)) {
      errorsText = errors.phone;
    }
    //email
    if (input.type === 'email' && !regExpEmail.test(input.value)) {
      errorsText = errors.email;
    }
  }

  return errorsText;
};
