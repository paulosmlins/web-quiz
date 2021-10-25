import { createContext, Dispatch, useState } from "react";
import Answer from "types/Answer";

interface QuizData {
  userAnswers: Answer[];
  setUserAnswers: Dispatch<Answer[]>;
}

export const QuizContext = createContext({} as QuizData);

export const QuizContextProvider: React.FC = ({ children }) => {
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

  return (
    <QuizContext.Provider
      value={{
        userAnswers,
        setUserAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
