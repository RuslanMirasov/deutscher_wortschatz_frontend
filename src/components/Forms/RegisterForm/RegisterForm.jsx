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
      <Input
        type="select"
        name="age"
        label="Wie Alt sind Sie?"
        placeholder="Wählen Sie..."
        required
        options={{
          kind: '0-17',
          jung: '18-30',
          eltern: '30-49',
          old: 'mehr als 50',
        }}
      />
      <Input
        type="select"
        name="language"
        label="Ihre Muttersprache"
        placeholder="Wählen Sie..."
        required
        options={{
          EN: 'English',
          UA: 'Українська',
          RU: 'Русский',
          FR: 'Français',
          IT: 'Italiano',
          ES: 'Español',
          PL: 'Polski',
          TR: 'Türkçe',
          AR: 'العربية',
          FA: 'فارسی',
        }}
      />

      <Input type="email" name="email" label="Email" placeholder="example@example.com" required />
      <Input type="password" name="password" label="Passwort" placeholder="Mindestens 6 Zeichen" required />

      <ButtonsList>
        <Button full>Registrieren</Button>
      </ButtonsList>
    </Form>
  );
};

export default RegisterForm;
