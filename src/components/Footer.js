import { FiFacebook, FiInstagram, FiMapPin, FiYoutube } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';

import { Container } from '../styles/Footer';

export default function Footer() {
  return (
    <Container>
      <div>
        <a
          href="https://www.facebook.com/cg.sbc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook color="#fff" />
          /cg.sbc
        </a>
        <a
          href="https://www.instagram.com/cg.sbc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram color="#fff" />
          @cg.sbc
        </a>
        <a
          href="https://wa.me/5511932621680"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiWhatsappLine color="#fff" />
          (11) 93262-1680
        </a>
        <a
          href="https://www.youtube.com/channel/UCy0zJljk1ZCdvnUZgz0mZTg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube color="#fff" />
          Comunidade da Graça SBC
        </a>
        <a
          href="https://www.google.com/maps/place/Av.+Winston+Churchill,+1680+-+Rudge+Ramos,+S%C3%A3o+Bernardo+do+Campo+-+SP,+09614-000"
          target="_blank"
          rel="noopener noreferrer"
          className="alinharTopo"
        >
          <FiMapPin color="#fff" size={18} />
          Av. Winston Churchill, 1680 - SBC, SP
        </a>
      </div>
    </Container>
  );
}
