import { Title } from 'components/Typography';
import Section from '../components/Section/Section';

const Book = () => {
  return (
    <Section bg="https://wallpapercave.com/wp/wp1834599.jpg" padTop="big" mask="rgba(0,0,0,0.5)" dark>
      <Title tag="h1" size="h2">
        Book name
      </Title>
    </Section>
  );
};

export default Book;
