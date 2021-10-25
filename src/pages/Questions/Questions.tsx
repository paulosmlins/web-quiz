import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import Question from "types/Question";
import { listQuestions } from "sevices/questions";
import QuestionItem from "./components/Question";

import { Container, QuestionGridContainer } from "./styles";

const Questions: React.FC = () => {
  const [itemQuestions, itemSetQuestions] = useState<Question[]>([]);
  const location = useLocation();

  useEffect(() => {
    const itemGetQuestions = async () => {
      const query = new URLSearchParams(location.search);
      const questions = await listQuestions(Number(query.get("q")));

      localStorage.setItem("questions", JSON.stringify(questions));
      itemSetQuestions(questions);
    };

    itemGetQuestions();
  }, [location]);

  return (
    <Container>
      <QuestionGridContainer
        container
        columns={{ xs: 5, sm: 5, md: 11 }}
        justifyContent="center"
        alignItems="center"
      >
        {itemQuestions.map((valueQuestion, index) => (
          <QuestionItem key={index} question={valueQuestion} />
        ))}
      </QuestionGridContainer>
    </Container>
  );
};

export default Questions;
