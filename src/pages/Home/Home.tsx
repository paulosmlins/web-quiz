import React from "react";
import {
  Container,
  ContainerBox,
  Form,
  FormLogo,
  FormTitle,
  DivInput,
  FormInput,
  InfoInput,
  FormButton,
} from "./styles";
import logoIMG from "assets/Logo-WA.png";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerBox>
          <Form>
            <FormLogo src={logoIMG} />
            <FormTitle>Quantas perguntas deseja responder?</FormTitle>
            <DivInput>
              <FormInput type="number" min="1" max="100" placeholder="1" />
              <InfoInput>
                Valor entre <span>1</span> e <span>100</span>
              </InfoInput>
            </DivInput>
            <FormButton>Confirmar</FormButton>
          </Form>
        </ContainerBox>
      </Container>
    </>
  );
};

export default Home;
