import React, { useState, useEffect } from "react";
import { Container, ContainerBox, Buttons } from "./styles";

interface Question {
  category: string;
}

const Questions: React.FC = (value) => {
  return (
    <>
      <Container>
        <ContainerBox></ContainerBox>
      </Container>
    </>
  );
};

export default Questions;
