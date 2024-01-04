const useErrorTextMasseges = true;

const nameRegex = /[^A-zА-яЁё+ ()-]/;
const phoneRegex = /^\+49\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

const errors = {
  empty: 'The field is empty!',
  name: 'Name cannot contain digits!',
  phone: 'Wrong phone format!',
  email: 'Wrong E-mail format!',
  password: 'Das Passwort muss mindestens 6 Zeichen lang sein, Klein- und Großbuchstaben sowie Zahlen enthalten',
};

export const validateInput = input => {
  let errorText = '';
  const currentInput = input;
  const label = currentInput.closest('label');
  const isErrorMassegeAlradyExist = label.querySelector('.labelError');

  // add Error function
  const addError = text => {
    errorText = text;
    currentInput.classList.remove('valid');
    currentInput.classList.add('invalid');
    if (useErrorTextMasseges) {
      if (isErrorMassegeAlradyExist) {
        isErrorMassegeAlradyExist.innerHTML = text;
        return;
      }
      label.insertAdjacentHTML('beforeend', `<span class="labelError">${text}</span>`);
      setTimeout(() => {
        label.querySelector('.labelError').classList.add('active');
      }, 1);
    }
  };

  // delete Error function
  const deleteError = () => {
    currentInput.classList.remove('invalid');
    currentInput.classList.add('valid');
    if (isErrorMassegeAlradyExist) {
      isErrorMassegeAlradyExist.classList.remove('active');
      setTimeout(() => {
        isErrorMassegeAlradyExist.remove();
      }, 400);
    }
  };

  // validation of selected input
  if (currentInput.required) {
    if (currentInput.value.length === 0) {
      addError(errors.empty);
    } else {
      //Name
      if (currentInput.name === 'name' && nameRegex.test(currentInput.value)) {
        addError(errors.name);
      }
      //phone
      if (currentInput.type === 'tel' && !phoneRegex.test(currentInput.value)) {
        addError(errors.phone);
      }
      //email
      if (currentInput.type === 'email' && !emailRegex.test(currentInput.value)) {
        addError(errors.email);
      }
      //password
      if (currentInput.type === 'password' && !passwordRegex.test(currentInput.value)) {
        addError(errors.password);
      }
    }
  }

  if (!errorText) {
    deleteError();
  }

  return errorText;
};

export const validateForm = form => {
  let errorsCount = 0;
  const formData = form.querySelectorAll('[required]');
  formData.forEach(input => {
    const error = validateInput(input);
    if (error) {
      errorsCount += 1;
    }
  });
  return errorsCount;
};
