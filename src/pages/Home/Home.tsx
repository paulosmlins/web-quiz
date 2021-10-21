import React, { useContext, useState } from "react";
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

import QuizContext from "contexts/QuizContext";

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const { state, setState } = useContext(QuizContext);

  const searchSubmit = (e: any) => {
    if (value === "") {
      e.preventDefault();
      return false;
    } else {
      setState({ value });
      window.location.href = `/questions`;
      console.log(state);
      e.preventDefault();
      return false;
    }
  };
  return (
    <>
      <Container>
        <ContainerBox>
          <Form onSubmit={searchSubmit}>
            <FormLogo src={logoIMG} />
            <FormTitle>Quantas perguntas deseja responder?</FormTitle>
            <DivInput>
              <FormInput
                type="number"
                min="1"
                max="100"
                placeholder="1"
                onChange={(e) => setValue(e.target.value)}
              />{" "}
              <InfoInput>
                Valor entre <span>1</span> e <span>100</span>
              </InfoInput>
            </DivInput>
            <FormButton type="submit">Confirmar</FormButton>
          </Form>
        </ContainerBox>
      </Container>
    </>
  );
};

export default Home;
