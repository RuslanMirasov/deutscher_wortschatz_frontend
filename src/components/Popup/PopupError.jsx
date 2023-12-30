import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';

const PopupError = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <>
      <Icon name="error" />
      <>
        <Title tag="h4" size="h6">
          {title}
        </Title>
        <hr />
      </>
      <Text>{text}</Text>
      <Button variant="black" size="small" onClick={popupClose} full>
        OK
      </Button>
    </>
  );
};

export default PopupError;
