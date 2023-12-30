import { Button, ButtonsList } from 'components/Buttons';
import '../Forms.scss';

const LoginForm = () => {
  return (
    <form action="./" method="get" className="form" noValidate>
      <label className="label">
        <span className="label__text">Name</span>
        <span className="label__input">
          <input type="text" className="input" name="name" required placeholder="Name" autoComplete="true" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Phone number</span>
        <span className="label__input">
          <input type="tel" className="input" name="phone" required autoComplete="true" inputMode="text" />
        </span>
      </label>
      <label className="label">
        <span className="label__text">Email</span>
        <span className="label__input">
          <input type="email" className="input" name="email" required autoComplete="true" />
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
