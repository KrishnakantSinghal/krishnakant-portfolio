import React from "react";
import { Container, Row} from "react-bootstrap";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (

    <Container fluid className="footer text-center">
      <Row>
        <div className="footer-body">
          <li className="social-icons">
            <a
              href="https://github.com/KrishnakantSinghal"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/krishna.singhal.2003?igsh=MzRlODBiNWFlZA=="
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/krishna-kant-singhal-7016501a0/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </div>
      </Row>
    </Container>
  );
}

export default Footer;
