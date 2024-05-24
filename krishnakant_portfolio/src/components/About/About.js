import React from "react";
import { useSelector } from 'react-redux';
import { Container } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import SkillStack from "./skillStack";
import krishna_formal from "../../Assets/Krishna_formal.png";

function About() {
  const tools = useSelector((state) => state.toolsData.tools);
  const techs = useSelector((state) => state.techsData.techs);
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
          <SkillStack skillData={techs} />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <SkillStack skillData={tools} />
        </div>
      </Container>
    </Container>
  );
}

export default About;
