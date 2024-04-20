import styled from "styled-components"
import Theme from "../../common/GlobalStyles/Theme";
import userIcon from "./assets/user-icon.svg"
import userPassword from "./assets/user-password.svg"

const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.white};

  padding: 4.625rem 3.75rem;
`;

const Container = styled.div`
  max-width: 480px;
  width: 100%;
`;

const Title = styled.h2`
  color: ${Theme.colors.blue};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Caption = styled.h3`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${Theme.colors.gray};
  margin-bottom: .375rem;

  .caption-suport {
    color: ${Theme.colors.blue};
    font-weight: 700;
    text-decoration: none;
    transition: all .3s ease-in-out;

    &:hover {
      color: ${Theme.colors.lightBlue};
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const Input = styled.input`
  outline: none;
  font-family: ${Theme.font.nunito};
  border: .0625rem solid ${Theme.colors.gray};
  border-radius: .375rem;
  color: ${Theme.colors.black};
  padding: 1rem .75rem;
  transition: all .3s ease-in-out;

  &::placeholder {
    color: ${Theme.colors.gray};
  }

  &:focus {
    border-color: ${Theme.colors.blue};
  }

  &.user, &.password {
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: 97%;
    padding-right: 40px;
  }

  &.user {
    background-image: url(${userIcon});
  }

  &.password {
    background-image: url(${userPassword});
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: .375rem;
  background-color: ${Theme.colors.blue};
  color: ${Theme.colors.white};
  padding: 1rem 3.25rem;
  max-width: 160px;
  width: 100%;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${Theme.colors.darkBlue};
  }

  &:active {
    background-color: ${Theme.colors.lightBlue};
  }
`;

export default function Authentication() {
  return (
    <AuthenticationContainer>
      <Container>
        <Title>Conecte-se</Title>
        <Caption>Dificuldades de acesso? <a href="#" className="caption-suport">Suporte</a></Caption>
        <Caption>Levará alguns minutos.</Caption>
        
        <FormContainer action="">
          <InputsContainer>
            <Input type="text" name="" className="user" id="user" placeholder="Usuario" />
            <Input type="password" name="" className="password" id="password" placeholder="Senha" />
          </InputsContainer>

          <Button>Entrar</Button>
        </FormContainer>
      </Container>
    </AuthenticationContainer>
  )
}
