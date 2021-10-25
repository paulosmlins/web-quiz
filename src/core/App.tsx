import React from "react";

import Routers from "routers/routers";
import { QuizContextProvider } from "contexts/QuizContext";

import { Container } from "./styles";

const App: React.FC = () => {
  return (
    <QuizContextProvider>
      <Container>
        <Routers />
      </Container>
    </QuizContextProvider>
  );
};

export default App;
