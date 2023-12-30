import { Title, Text } from 'components/Typography';

const PopupRequest = ({ title, text }) => {
  return (
    <>
      <Title tag="h4" size="h5">
        {title}
      </Title>
      <hr />
      <Text size="small">{text}</Text>
    </>
  );
};

export default PopupRequest;
