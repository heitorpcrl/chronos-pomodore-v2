import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  console.log('TSX OK');
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

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput labelText='task' id='meuInput' type='text' />
          </div>

          <div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer> Entenda a tecnica do Pomodoro. </Footer>
      </Container>
    </>
  );
}
