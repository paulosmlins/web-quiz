import React, { useState } from "react";
import { useHistory } from "react-router";

import logoIMG from "assets/Logo-WA.png";

import {
  Container,
  ContainerBox,
  Counter,
  BoxCorrectPoint,
  BoxIncorrectPoint,
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
  const correctScore = Number(localStorage.getItem("CorrectScore"));
  const incorrectScore = Number(localStorage.getItem("IncorrectScore"));

  const searchSubmit = (e: any) => {
    if (value === "") {
      e.preventDefault();
      return false;
    } else {
      localStorage.setItem("CorrectScore", String(correctScore));
      localStorage.setItem("IncorrectScore", String(incorrectScore));
      history.push(`/actionbuttons?q=${value}`);
      localStorage.removeItem("questions");
      localStorage.removeItem("results");
      e.preventDefault();
      return false;
    }
  };

  return (
    <>
      <Container>
        <ContainerBox>
          <Counter>
            <BoxCorrectPoint>
              <p>Correct</p>
              <span>{localStorage.getItem("CorrectScore") || 0}</span>
            </BoxCorrectPoint>
            <BoxIncorrectPoint>
              <p>Incorrect</p>
              <span>{localStorage.getItem("IncorrectScore") || 0}</span>
            </BoxIncorrectPoint>
          </Counter>
          <Form onSubmit={searchSubmit}>
            <FormLogo src={logoIMG} />
            <FormTitle>Quantas perguntas deseja responder?</FormTitle>
            <DivInput>
              <FormInput
                type="number"
                min="1"
                max="100"
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
