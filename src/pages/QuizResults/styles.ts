import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { style } from "@material-ui/system";

export const Container = styled.div`
  padding: 15px;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: var(--background);
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--foreground);
    border-radius: 20px;
  }
`;

export const QuestionGridContainer = styled(Grid)`
  gap: 40px 40px;
  margin: 30px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .css-vj1n65-MuiGrid-root {
    flex-direction: column;
  }
`;

export const QuestionGrid = styled(Grid)`
  height: 400px;
  margin: 0;
  text-align: center;
  border-radius: 15px;
  background-color: var(--backgroundclear);
  color: var(--foreground);
`;

export const QuestionGridItens = styled(Grid)`
  height: 100%;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  background-color: var(--backgroundclear);
  color: var(--foreground);

  .Answer {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Question = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CorrectAnswer = styled.p`
  font-weight: bold;
  margin: 10px 0;
  color: lime;
`;

export const InCorrectAnswer = styled.p`
  font-weight: bold;
  margin: 10px 0;
  color: red;
`;

export const Description = styled.p`
  font-weight: bold;
  font-size: 0.7rem;
`;

export const PAnswer = styled.p`
  gap: 50px 10px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
`;
