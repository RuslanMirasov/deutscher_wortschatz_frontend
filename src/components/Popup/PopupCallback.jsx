import { CallbackForm } from 'components/Forms';
import { Title, Text } from 'components/Typography';

const PopupCallback = () => {
  return (
    <>
      <Title tag="h4" size="h5">
        Helfen Sie uns, die <br />
        App zu verbessern
      </Title>
      <hr />
      <Text>
        Wenn Sie einen Tipp- oder Übersetzungsfehler gefunden <br />
        haben, teilen Sie uns dies bitte mit.
      </Text>
      <CallbackForm />
    </>
  );
};

export default PopupCallback;
