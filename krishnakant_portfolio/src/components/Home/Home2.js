import React from "react";
import { Container } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid id="about">
      <Particle />
      <Container>
        <div className="home-content">
          <div className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#6F86E5" }}>
              LET ME <span className="sky"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Versatile
              <i>
                <b className="sky"> Software Developer </b>
              </i>
              with a passion for solving complex problems through elegant and
              efficient coding.
              <br />
              <br />
              Experienced in
              <i>
                <b className="sky"> full-stack development, </b>
              </i>
               specializing in back-end technologies.
              <br />
              <br />
              Proven ability to
              <i>
                <b className="sky"> design, develop, and implement </b>
              </i>{" "}
              software solutions to meet business requirements.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="sky">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              products That makes other life <b className="sky">easier and secure.</b>
            </p>
          </div>
          <div className="myAvtar">
            <Tilt>
              <img src={laptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </div>
        </div>
        <div className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>Feel free to <span className="sky">connect </span>with me</p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/KrishnakantSinghal"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/krishna-kant-singhal-7016501a0/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/krishna.singhal.2003?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
