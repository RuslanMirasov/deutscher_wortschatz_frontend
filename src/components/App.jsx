import Section from 'components/Section/Section';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Logo from './Logo/Logo';

export const App = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <main className="main">
        <Section>
          <h1>Deutscher Wordschatz</h1>
        </Section>
      </main>
      <Footer>
        <Logo />
        <p>Footer</p>
      </Footer>
    </>
  );
};
