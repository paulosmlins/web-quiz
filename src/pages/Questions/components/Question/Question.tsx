import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Snackbar, Alert, AlertProps, AlertColor } from "@material-ui/core";

import QuestionType from "types/Question";
import Answer from "types/Answer";
import useQuiz from "hooks/useQuiz";

import {
  FormQuestion,
  QuestioneroGrid,
  ButtonQuestion,
  FormControlLabelQuestion,
  FormControlQuestion,
  FormLabelQuestion,
  RadioGroupQuestion,
  RadioQuestion,
} from "./styles";

interface IQuestionProps {
  question: QuestionType;
}

const AlertItem = React.forwardRef<HTMLDivElement, AlertProps>(function Alerts(
  props,
  ref
) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Question: React.FC<IQuestionProps> = ({ question }) => {
  const [options, setOptions] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);
  const [stateResult, setStateResult] = useState<AlertColor>();
  const [textAlert, setTextAlert] = useState("");

  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    setOptions(
      [...question.incorrect_answers, question.correct_answer].sort(
        () => Math.random() - 0.5
      )
    );
  }, [question]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setError(false);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { userAnswers, setUserAnswers } = useQuiz();

  const saveInQuizContext = () => {
    const answer: Answer = {
      question: question.question,
      correctChoice: question.correct_answer,
      userChoice: value,
    };

    setUserAnswers([...userAnswers, answer]);
  };

  const updateCorrectScore = () => {
    const getCorrectScore = localStorage.getItem("CorrectScore");
    if (getCorrectScore) {
      const newCorrectScore = Number(localStorage.getItem("CorrectScore")) + 1;
      localStorage.setItem("CorrectScore", String(newCorrectScore));
    }
  };
  const updateIncorrectScore = () => {
    const getIncorrectScore = localStorage.getItem("IncorrectScore");
    if (getIncorrectScore) {
      const newIncorrectScore =
        Number(localStorage.getItem("IncorrectScore")) + 1;
      localStorage.setItem("IncorrectScore", String(newIncorrectScore));
    }
  };

  const checkAnswers = () => {
    if (value === question.correct_answer) {
      updateCorrectScore();
      setError(false);
      setDisable(true);
      setOpen(true);
      setStateResult("success");
      setTextAlert("Your answer is correct");
      return;
    }
    updateIncorrectScore();
    setError(true);
    setDisable(true);
    setOpen(true);
    setStateResult("error");
    setTextAlert("Your answer is incorrect");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (value === "") {
      event.preventDefault();
      return false;
    } else {
      event.preventDefault();
      saveInQuizContext();
      checkAnswers();
      if (userAnswers.length === Number(query.get("q")) - 1) {
        history.push("/results");
        return;
      }
    }
  };

  return (
    <QuestioneroGrid item xs={4} sm={4} md={4} padding={0}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <AlertItem
          onClose={handleClose}
          severity={stateResult}
          sx={{ width: "100%" }}
        >
          {textAlert}
        </AlertItem>
      </Snackbar>

      <FormQuestion onSubmit={handleSubmit}>
        <FormLabelQuestion>
          <span dangerouslySetInnerHTML={{ __html: question.question }} />
        </FormLabelQuestion>
        <FormControlQuestion error={error} variant="standard">
          <RadioGroupQuestion
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {options.map((option) => (
              <FormControlLabelQuestion
                key={option}
                value={option}
                control={
                  <RadioQuestion
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "var(--primary)",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                    disabled={disable}
                  />
                }
                label={<p dangerouslySetInnerHTML={{ __html: option }} />}
              />
            ))}
          </RadioGroupQuestion>
        </FormControlQuestion>
        <ButtonQuestion
          sx={{ mt: 1, mr: 1 }}
          disabled={disable}
          type="submit"
          variant="outlined"
        >
          Responder
        </ButtonQuestion>
      </FormQuestion>
    </QuestioneroGrid>
  );
};

export default Question;
