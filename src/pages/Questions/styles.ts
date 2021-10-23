import styled from "styled-components";
import { Grid } from "@material-ui/core";

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

export const ContainerBox = styled.div`
  display: flex;
  gap: 30px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
`;

export const QuestionGridContainer = styled(Grid)`
  gap: 10px 10px;
`;
