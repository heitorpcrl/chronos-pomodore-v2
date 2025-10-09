import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

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

          <div>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
