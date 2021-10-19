import React from "react";
import { Container, ContainerBox, Buttons } from "./styles";

const ActionButtons: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerBox>
          <Buttons>Start</Buttons>
          <Buttons>Cancel</Buttons>
        </ContainerBox>
      </Container>
    </>
  );
};

export default ActionButtons;
