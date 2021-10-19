import React from "react";

import {
  Container,
  HeaderBoxTop,
  HeaderBoxBottom,
  Logo,
  ReportIcon,
  GitHubIcon,
  LinkedinIcon,
} from "./styles";
import logoIMG from "assets/Logo-WA.png";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderBoxTop>
          <Logo src={logoIMG} />
          <ReportIcon />
        </HeaderBoxTop>
        <HeaderBoxBottom>
          <a href="https://github.com/paulosmlins" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/paulosmlins/" target="_blank">
            <LinkedinIcon />
          </a>
        </HeaderBoxBottom>
      </Container>
    </>
  );
};

export default Header;
