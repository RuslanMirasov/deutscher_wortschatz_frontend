import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Form, Input } from '..';

const RegisterForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();

  const sendRegisterForm = form => {
    setLoading();
    const formData = form;

    setTimeout(() => {
      unsetLoading();
      popupOpen(
        'confirm',
        `Hallo ${formData.get('name')}`,
        'Bestätigen Sie bitte Ihre E-Mail, wir haben Ihnen einen Link an Ihre E-Mail-Adresse geschickt.'
      );
    }, 1500);
  };

  return (
    <Form onSubmit={sendRegisterForm}>
      <Input type="text" name="name" label="Vorname" placeholder="Christoph" required />
      <Input type="email" name="email" label="Email" placeholder="example@example.com" required />
      <Input type="select" name="language" label="Ihre Muttersprache" placeholder="Eine Sprache wählen" required />
      <Input type="password" name="password" label="Passwort" placeholder="Mindestens 6 Zeichen" required />
      <ButtonsList>
        <Button full>Registrieren</Button>
      </ButtonsList>
    </Form>
  );
};

export default RegisterForm;
