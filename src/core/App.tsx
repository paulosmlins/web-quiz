import React from "react";
import Routers from "routers/routers";
import Header from "components/Header";

import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Routers />
    </Container>
  );
};

export default App;
