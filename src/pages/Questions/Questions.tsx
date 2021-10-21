import React, { useState, useEffect, useContext } from "react";
import { Container, ContainerBox, Buttons } from "./styles";
import axios from "axios";

import QuizContext from "contexts/QuizContext";

interface Question {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string;
}

const Questions: React.FC = () => {
  const { state } = useContext(QuizContext);
  const [iQuestions, iSetQuestions] = useState<Question[]>([]);

  const iGetQuestions = async () => {
    const result: any = await axios.get(
      `https://opentdb.com/api.php?amount=${state.value}`
    );

    iSetQuestions(result.data.results);
    console.log(state);
  };

  useEffect(() => {
    iGetQuestions();
  }, []);

  return (
    <>
      <Container>
        <ContainerBox>
          {iQuestions.map((ValueQuestion) => {
            return <Buttons>{ValueQuestion.category || " "}</Buttons>;
          })}
        </ContainerBox>
      </Container>
    </>
  );
};

export default Questions;
