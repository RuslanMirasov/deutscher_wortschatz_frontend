import { Title } from 'components/Typography';
import Section from '../components/Section/Section';

const Book = () => {
  return (
    <>
      <Section bg="#eee" padTop="big">
        <Title tag="h1" size="h2">
          Book name
        </Title>
      </Section>
      <Section full>
        <Title tag="h2" size="h5">
          Themas list
        </Title>
      </Section>
    </>
  );
};

export default Book;
