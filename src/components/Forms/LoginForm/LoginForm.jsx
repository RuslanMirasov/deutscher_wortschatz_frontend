import { Button, ButtonsList } from 'components/Buttons';
import '../Forms.scss';

const LoginForm = () => {
  return (
    <form action="./" method="get" className="form" novalidate>
      <label className="label">
        <span className="label__text">Name</span>
        <span className="label__input">
          <input type="text" className="input" name="name" required autocomplete="true" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Phone number</span>
        <span className="label__input">
          <input type="tel" className="input" name="phone" required autocomplete="true" inputmode="text" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Email</span>
        <span className="label__input">
          <input type="email" className="input" name="email" required autocomplete="true" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Comment</span>
        <span className="label__input">
          <textarea className="custom-scrollbar input input--textarea" name="comment"></textarea>
        </span>
      </label>
      <ButtonsList>
        <Button full>Senden</Button>
      </ButtonsList>
    </form>
  );
};

export default LoginForm;
