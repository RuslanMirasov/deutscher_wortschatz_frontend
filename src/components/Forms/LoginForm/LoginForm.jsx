import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Form, Input } from '..';
import '../Forms.scss';

const LoginForm = () => {
  const { setLoading, unsetLoading } = usePopup();
  const handleSubmit = e => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
    }, 1500);
  };

  return (
    <Form action="./" method="post" className="form" noValidate onSubmit={handleSubmit}>
      <Input type="text" name="name" required label="Ihre Vorname" placeholder="Mirasov Ruslan" />
      <Input type="email" name="email" required label="Ihre Email" placeholder="example@example.com" />
      <Input type="tel" name="phone" required label="Ihre Telephonnumer" placeholder="+380962167126" />
      <Input type="password" name="password" required label="Password" placeholder="Min 12 symbols" />
      <ButtonsList>
        <Button full>Anmelden</Button>
      </ButtonsList>
    </Form>
  );
};

export default LoginForm;
