import React, { useState } from "react";
import { useHistory } from "react-router";

import logoIMG from "assets/Logo-WA.png";

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

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const history = useHistory();

  const searchSubmit = (e: any) => {
    if (value === "") {
      e.preventDefault();
      return false;
    } else {
      history.push(`/actionbuttons/questions?q=${value}`);
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
