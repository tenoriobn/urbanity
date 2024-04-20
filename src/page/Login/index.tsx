import styled from "styled-components";
import Authentication from "../../components/Authentication";
import Slide from "../../components/Slide";

const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

export default function Login() {
  return (
    <LoginContainer>
      <Slide />
      <Authentication />
    </LoginContainer>
  )
}
