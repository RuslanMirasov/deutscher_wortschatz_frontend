const regExpName = /[^A-zА-яЁё+ ()-]/;
const regExpPhone = /^\+49\d{10}$/;
const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/;

const errors = {
  empty: 'The field is empty!',
  name: 'Name cannot contain digits!',
  phone: 'Wrong phone format!',
  email: 'Wrong E-mail format!',
  password: 'Das Passwort muss mindestens 12 Zeichen lang sein, Klein- und Großbuchstaben sowie Zahlen enthalten',
};

export const validateInput = input => {
  let errorsText = '';

  if (input.required) {
    if (input.value.length === 0) {
      errorsText = errors.empty;
    } else {
      //Name
      if (input.name === 'name' && regExpName.test(input.value)) {
        errorsText = errors.name;
      }
      //phone
      if (input.type === 'tel' && !regExpPhone.test(input.value)) {
        errorsText = errors.phone;
      }
      //email
      if (input.type === 'email' && !regExpEmail.test(input.value)) {
        errorsText = errors.email;
      }
      //password
      if (input.type === 'password' && !passwordRegex.test(input.value)) {
        errorsText = errors.password;
      }
    }
  }

  return errorsText;
};

export const validateForm = form => {
  let checker = false;

  return checker;
};
