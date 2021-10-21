import React, { useContext } from "react";
import Routers from "routers/routers";
import Header from "components/Header";

import GlobalContext from "contexts";

import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <GlobalContext>
        <Routers />
      </GlobalContext>
    </Container>
  );
};

export default App;
