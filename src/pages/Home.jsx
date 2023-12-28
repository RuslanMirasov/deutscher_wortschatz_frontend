import Section from '../components/Section/Section';
import { TitleBox, Title, Text } from 'components/Typography';
import { Button, ButtonsList } from 'components/Buttons';

const Home = () => {
  return (
    <>
      <Section
        bg="https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=1500,height=750,quality=75/https://nomadlist.com/assets/img/places/berlin-germany.jpg?1703376034"
        padTop="big"
        padBottom="big"
        mask="rgba(58, 58, 58, 0.7)"
        dark
      >
        <TitleBox>
          <Title tag="h1" size="h2">
            My site title &times;
          </Title>
          <Text size="big">
            &times; Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Quis eaque est sed ut non rerum quasi itaque necessitatibus, <br />
            sequi consequuntur? Aut excepturi at, sapiente debitis <br />
            doloremque porro odit
          </Text>
          <ButtonsList>
            <Button to="./books/444">Unterrichten</Button>
            <Button
              onClick={() => {
                alert('Hello');
              }}
            >
              Anmeldung
            </Button>
          </ButtonsList>
        </TitleBox>
      </Section>
      <Section full>
        <TitleBox>
          <Title tag="h2" size="h3">
            Wehlen Sie ein Buch
          </Title>
          <ButtonsList>
            <Button>Registrieren</Button>
            <Button to="./books/444">Weiter</Button>
          </ButtonsList>
        </TitleBox>
      </Section>
    </>
  );
};

export default Home;
