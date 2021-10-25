import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { Container, ContainerBox, Buttons } from "./styles";

const ActionButtons: React.FC = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  return (
    <Container>
      <ContainerBox>
        <Link to={`/questions?q=${query.get("q")}`}>
          <Buttons>Start</Buttons>
        </Link>

        <Link to="/">
          <Buttons>Cancel</Buttons>
        </Link>
      </ContainerBox>
    </Container>
  );
};

export default ActionButtons;
