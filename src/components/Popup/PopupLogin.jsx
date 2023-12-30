import { Button, ButtonsList } from 'components/Buttons';
import { Title, Text } from 'components/Typography';
import { usePopup } from '../../contexts/PopupContext';

const PopupLogin = () => {
  const { popupOpen } = usePopup();
  return (
    <>
      <Title tag="h4" size="h4">
        Anmeldung
      </Title>
      <ButtonsList align="center">
        <hr />
        <Text>Wenn Sie noch kein Profil haben,</Text>
        <Button size="small" full variant="border-dark" onClick={() => popupOpen('registration')}>
          REGISTRIEREN SIE SICH
        </Button>
      </ButtonsList>
    </>
  );
};

export default PopupLogin;
