import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { MainForm } from './components/MainForm';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer> Entenda a tecnica do Pomodoro. </Footer>
      </Container>
    </>
  );
}
