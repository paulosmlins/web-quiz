import useQuiz from "hooks/useQuiz";
import React, { useState, useEffect } from "react";

import {
  Container,
  QuestionGridContainer,
  QuestionGrid,
  Question,
  CorrectAnswer,
  InCorrectAnswer,
  Description,
  PAnswer,
  QuestionGridItens,
} from "./styles";

const QuizResult: React.FC = () => {
  const { userAnswers, setUserAnswers } = useQuiz();
  const [listResult, setListResult] = useState(userAnswers);

  useEffect(() => {
    const checkStorageResult = () => {
      const getResult = localStorage.getItem("results");

      if (getResult) {
        setListResult(JSON.parse(getResult));
        return;
      }
      localStorage.setItem("results", JSON.stringify(userAnswers));
    };
    localStorage.removeItem("questions");
    setUserAnswers([]);
    checkStorageResult();
  });

  return (
    <Container>
      <QuestionGridContainer
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {listResult.map((result, index) => {
          return (
            <QuestionGrid
              key={index}
              item
              xs={4}
              sm={4}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding="50px"
            >
              <QuestionGridItens>
                <Question
                  dangerouslySetInnerHTML={{ __html: result.question }}
                />
                {result.correctChoice === result.userChoice ? (
                  <div className="Answer">
                    <PAnswer>
                      Chosen Answer:
                      <CorrectAnswer
                        dangerouslySetInnerHTML={{
                          __html: result.correctChoice,
                        }}
                      />
                    </PAnswer>
                    <Description>Answered Correctly</Description>
                  </div>
                ) : (
                  <div className="Answer">
                    <PAnswer>
                      Correct Answer:
                      <CorrectAnswer
                        dangerouslySetInnerHTML={{
                          __html: result.correctChoice,
                        }}
                      />
                    </PAnswer>
                    <PAnswer>
                      Chosen Answer:
                      <InCorrectAnswer
                        dangerouslySetInnerHTML={{ __html: result.userChoice }}
                      />
                    </PAnswer>

                    <Description>Answered Incorrectly</Description>
                  </div>
                )}
              </QuestionGridItens>
            </QuestionGrid>
          );
        })}
      </QuestionGridContainer>
    </Container>
  );
};

export default QuizResult;
