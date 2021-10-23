import React, { useState, useEffect } from "react";
import { Snackbar, Alert, AlertProps, AlertColor } from "@material-ui/core";

import QuestionType from "types/Question";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === question.correct_answer) {
      setError(false);
      setDisable(true);
      setOpen(true);
      setStateResult("success");
      setTextAlert("Your answer is correct");
    } else {
      setError(true);
      setDisable(true);
      setOpen(true);
      setStateResult("error");
      setTextAlert("Your answer is incorrect");
    }
  };

  return (
    <QuestioneroGrid
      item
      xs={5}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
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
      <FormLabelQuestion>
        <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </FormLabelQuestion>
      <FormQuestion onSubmit={handleSubmit}>
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
                disabled={disable}
                control={<RadioQuestion />}
                label={<span dangerouslySetInnerHTML={{ __html: option }} />}
              />
            ))}
          </RadioGroupQuestion>
          <ButtonQuestion
            sx={{ mt: 1, mr: 1 }}
            disabled={disable}
            type="submit"
            variant="outlined"
          >
            Responder
          </ButtonQuestion>
        </FormControlQuestion>
      </FormQuestion>
    </QuestioneroGrid>
  );
};

export default Question;
