import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Question from "types/Question";
import { listQuestions } from "sevices/questions";
import QuestionItem from "./components/Question";

import { Container, QuestionGridContainer } from "./styles";

const Questions: React.FC = () => {
  const [iQuestions, iSetQuestions] = useState<Question[]>([]);
  const location = useLocation();

  useEffect(() => {
    const iGetQuestions = async () => {
      const query = new URLSearchParams(location.search);
      const questions = await listQuestions(Number(query.get("q")));

      iSetQuestions(questions);
    };

    iGetQuestions();
  }, [location]);

  return (
    <Container>
      <QuestionGridContainer container>
        {iQuestions.map((valueQuestion, index) => (
          <QuestionItem key={index} question={valueQuestion} />
        ))}
      </QuestionGridContainer>
    </Container>
  );
};

export default Questions;
