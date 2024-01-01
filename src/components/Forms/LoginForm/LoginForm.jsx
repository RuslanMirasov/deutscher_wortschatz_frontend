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
      <Input type="text" name="name" label="Ihre Vorname" placeholder="Mirasov Ruslan" required />
      <Input type="email" name="email" label="Ihre Email" placeholder="example@example.com" required />
      <Input type="tel" name="phone" label="Ihre Telephonnumer" placeholder="+49 XXX XXXXXXX" required />
      <Input type="password" name="password" label="Password" placeholder="Min 12 symbols" required />
      <ButtonsList>
        <Button full>Anmelden</Button>
      </ButtonsList>
    </Form>
  );
};

export default LoginForm;
