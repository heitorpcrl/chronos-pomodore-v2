import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Footer } from './components/Footer';

import { Home } from './pages/Home/home';
export function App() {
  return (
    <>
      <Home />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
