import styled from "styled-components";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@material-ui/core";

export const QuestioneroGrid = styled(Grid)`
  padding: 0;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: var(--backgroundclear);
  color: var(--foreground);
`;

export const FormQuestion = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  gap: 10px 0;
`;

export const RadioQuestion = styled(Radio)`
  margin: 0;
`;

export const RadioGroupQuestion = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin: 0;
`;

export const FormControlLabelQuestion = styled(FormControlLabel)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin: 0;

  span p {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const FormControlQuestion = styled(FormControl)`
  margin: 0;
  height: 50%;
`;

export const FormLabelQuestion = styled(FormLabel)`
  width: 100%;
  text-align: center;
  word-break: normal;
  margin: 0;
  word-break: keep-all;

  span {
    color: var(--foreground);
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const ButtonQuestion = styled(Button)``;
