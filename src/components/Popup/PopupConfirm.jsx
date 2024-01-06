import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';
import PopupAnimation from './PopupAnimation/PopupAnimation';

const PopupConfirm = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <PopupAnimation>
      <Icon name="confirm" color="var(--green-color)" />
      <Title tag="h4" size="h5">
        {title}
      </Title>
      <hr />
      <Text>{text}</Text>
      <Button onClick={popupClose} full>
        OK
      </Button>
    </PopupAnimation>
  );
};

export default PopupConfirm;
