import styled from "styled-components";
import { Assessment, GitHub, LinkedIn } from "@material-ui/icons";

export const Container = styled.div`
  width: 60px;
  height: 100%;
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--backgroundclear);
`;

export const HeaderBoxTop = styled.div`
  gap: 25px 0;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderBoxBottom = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const ReportIcon = styled(Assessment)`
  color: var(--foreground);
  padding: 10px;
  border-radius: 30px;

  :hover {
    color: var(--primary);
    background-color: #0c0c0f;
  }
`;

export const GitHubIcon = styled(GitHub)`
  color: var(--foreground);
  padding: 10px;
  border-radius: 30px;

  :hover {
    color: var(--primary);
    background-color: #0c0c0f;
  }
`;

export const LinkedinIcon = styled(LinkedIn)`
  color: var(--foreground);
  padding: 10px;
  border-radius: 30px;

  :hover {
    color: var(--primary);
    background-color: #0c0c0f;
  }
`;
