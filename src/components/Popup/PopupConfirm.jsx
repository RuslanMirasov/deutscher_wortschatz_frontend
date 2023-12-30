import Icon from 'components/Icon/Icon';
import { Title, Text } from 'components/Typography';
import { Button } from 'components/Buttons';
import { usePopup } from 'contexts/PopupContext';

const PopupConfirm = ({ title, text }) => {
  const { popupClose } = usePopup();
  return (
    <>
      <Icon name="confirm" color="var(--green-color)" />
      <>
        <Title tag="h4" size="h5">
          {title}
        </Title>
        <hr />
      </>
      <Text>{text}</Text>
      <Button size="small" onClick={popupClose} full>
        OK
      </Button>
    </>
  );
};

export default PopupConfirm;
