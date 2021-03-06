import styled from "styled-components";
import { GitHub, LinkedIn } from "@material-ui/icons";

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
  padding: 20px 0;
  width: 100%;
  border-top: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const GitHubIcon = styled(GitHub)`
  color: var(--foreground);
  padding: 5px;
  border-radius: 30px;

  :hover {
    color: var(--primary);
    background-color: #0c0c0f;
  }
`;

export const LinkedinIcon = styled(LinkedIn)`
  color: var(--foreground);
  padding: 5px;
  border-radius: 30px;

  :hover {
    color: var(--primary);
    background-color: #0c0c0f;
  }
`;
