import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { useState } from 'react';
import { Form, Input } from '..';
// import '../Forms.scss';

const LoginForm = () => {
  const [isInvalid, setIsInvalid] = useState(true);
  const [invalidInputs, setInvalidInputs] = useState([]);
  const { setLoading, unsetLoading, popupClose } = usePopup();

  const sendLoginForm = e => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
      popupClose();
    }, 1500);
  };

  return (
    <Form action="./" method="post" className="form" noValidate onSubmit={sendLoginForm}>
      <Input type="text" name="name" label="Ihre Vorname" placeholder="Mirasov Ruslan" required />
      <Input type="email" name="email" label="Ihre Email" placeholder="example@example.com" required />
      <Input type="tel" name="phone" label="Ihre Telephonnumer" placeholder="+49 XXX XXXXXXX" required />
      <Input type="password" name="password" label="Password" required />

      <ButtonsList>
        <Button full disabled={isInvalid}>
          Anmelden
        </Button>
      </ButtonsList>
    </Form>
  );
};

export default LoginForm;
