import styled from "styled-components"
import Theme from "../../common/GlobalStyles/Theme";
import logo from "./assets/Logo.svg"
import SlideImage1 from "./assets/SlideImage1.png"
import SlideImage2 from "./assets/SlideImage2.png"
import SlideImage3 from "./assets/SlideImage3.png"
import { Carousel } from "react-bootstrap";

const SlideContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  background-color: ${Theme.colors.blue};
  padding: 4.625rem 3.75rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Logo = styled.img`
  align-self: flex-start;
  height: 60px;
`;

const CarouselContainer = styled(Carousel)`
  .carousel-item.active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .slide-image {
    max-width: 420px;
    width: 100%;

    @media (min-width: 1400px) {
      max-width: 500px;
    }
  }

  .caption {
    position: initial;
  }

  .caption p {
    margin-bottom: 2rem;
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .carousel-indicators {
    margin: 0;
  }

  .carousel-indicators button {
    border-radius: 100%;
    width: 20px;
    height: 20px;
  }
`;

export default function Slide() {
  return (
    <SlideContainer>
      <Logo src={logo} alt="Logo da Urbanity localizado no canto superior esquerdo" />

      <CarouselContainer fade>
        <Carousel.Item>
          <img className="slide-image" src={SlideImage1} alt="" />
          <Carousel.Caption className="caption">
            <h3>Segurança</h3>
            <p>Mantenha sua conta protegida: deslogue ao finalizar<br/> o expediente para evitar acessos não autorizados.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="slide-image" src={SlideImage2} alt="" />
          <Carousel.Caption className="caption">
            <h3>Atualizações de Software</h3>
            <p>Mantenha seus dispositivos e aplicativos atualizados<br/> para proteger contra vulnerabilidades de segurança.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="slide-image" src={SlideImage3} alt="" />
          <Carousel.Caption className="caption">
            <h3>Ataques de Engenharia Social</h3>
            <p>Fique atento a e-mails e mensagens suspeitas. Nunca forneça<br/> suas informações de login em resposta a solicitações não solicitadas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </CarouselContainer>
    </SlideContainer>
  )
}
