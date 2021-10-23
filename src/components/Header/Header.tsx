import React from "react";
import { Link } from "react-router-dom";

import logoIMG from "assets/Logo-WA.png";

import {
  Container,
  HeaderBoxTop,
  HeaderBoxBottom,
  Logo,
  ReportIcon,
  GitHubIcon,
  LinkedinIcon,
} from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderBoxTop>
          <Link to="/">
            <Logo src={logoIMG} />
          </Link>
          <ReportIcon />
        </HeaderBoxTop>
        <HeaderBoxBottom>
          <a
            href="https://github.com/paulosmlins"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 15 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/paulosmlins/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon sx={{ fontSize: 18 }} />
          </a>
        </HeaderBoxBottom>
      </Container>
    </>
  );
};

export default Header;
