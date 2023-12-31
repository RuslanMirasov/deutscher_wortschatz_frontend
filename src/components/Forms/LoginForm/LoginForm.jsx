import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import '../Forms.scss';

const LoginForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();
  const handleSubmit = e => {
    e.preventDefault();
    setLoading();
    const form = e.target;
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    setTimeout(() => {
      unsetLoading();
      popupOpen('confirm', 'Вы залогинены!', 'Поздравляем!');
    }, 1500);
  };

  return (
    <form action="./" method="post" className="form" noValidate onSubmit={handleSubmit}>
      <label className="label">
        <span className="label__text">Email</span>
        <span className="label__input">
          <input type="email" className="input" name="email" required autoComplete="true" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Password</span>
        <span className="label__input">
          <input type="password" className="input" name="password" required autoComplete="false" />
        </span>
      </label>
      <ButtonsList>
        <Button full>Senden</Button>
      </ButtonsList>
    </form>
  );
};

export default LoginForm;
