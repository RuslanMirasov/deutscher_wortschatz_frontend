import { Button, ButtonsList } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import { Form, Input } from '..';

const RequestForm = () => {
  const { setLoading, unsetLoading, popupOpen } = usePopup();

  const sendRequestForm = form => {
    setLoading();

    setTimeout(() => {
      unsetLoading();
      popupOpen('confirm');
    }, 1500);
  };

  return (
    <Form onSubmit={sendRequestForm}>
      <Input type="text" name="name" label="Vorname" placeholder="Christoph" required />
      <Input type="email" name="email" label="Email" placeholder="example@example.com" required />
      <Input type="tel" name="phone" label="Ihre Telefonnumer" placeholder="+490000000000" required />
      <Input type="textarea" name="massege" label="Ihre Nachricht" placeholder="Hallo, alle zusammen..." />
      <ButtonsList>
        <Button full>Registrieren</Button>
      </ButtonsList>
    </Form>
  );
};

export default RequestForm;
