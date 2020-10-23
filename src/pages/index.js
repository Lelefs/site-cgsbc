import SEO from '../components/SEO';
import Footer from '../components/Footer';

import { Container } from '../styles/Construcao';

export default function Home() {
  return (
    <>
      <SEO
        title="Comunidade da Graça - SBC"
        description="Comunidade da Graça - São Bernardo do Campo"
        shouldExcludeTitleSufix
      />
      <a className="skip-link" href="#mainCards">
        Skip to main
      </a>
      <Container>
        <h1>Em manutenção!</h1>
        <p>Confira nossos horários de cultos:</p>
        <strong>Domingo</strong>
        <p>Celebração da família: 09:30 e às 18:00</p>
        <strong>Terça-feira</strong>
        <p>Projeto IDE: 20:00</p>
        <img
          src="/logo.png"
          alt="Comunidade da Graça - SBC"
          title="Comunidade da Graça - SBC"
        />
      </Container>
      <Footer />
    </>
  );
}
