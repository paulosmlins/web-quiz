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
            <GitHubIcon sx={{ fontSize: 15 }} />
          </a>
          <a href="https://www.linkedin.com/in/paulosmlins/" target="_blank">
            <LinkedinIcon sx={{ fontSize: 18 }} />
          </a>
        </HeaderBoxBottom>
      </Container>
    </>
  );
};

export default Header;
