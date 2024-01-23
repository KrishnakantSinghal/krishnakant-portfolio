import React from "react";
import { Container } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import krishna_formal from "../../Assets/Krishna_formal.png";
import tools from "./ToolstackValue";
import techs from "./TechstackValue";

function About() {
  return (
    <Container fluid className="about-section" id="skills">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          <div className="about-img">
            <img src={krishna_formal} alt="about" className="img-fluid" />
          </div>
        </div>
        <div>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Toolstack toolData={techs} />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <Toolstack toolData={tools} />
        </div>
      </Container>
    </Container>
  );
}

export default About;
