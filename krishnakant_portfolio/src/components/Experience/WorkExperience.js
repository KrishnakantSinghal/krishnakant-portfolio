import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperienceCard from "./WorkExperienceCard";
import WorkExperienceData from "./WorkExperienceData";

const Work = ({ position, company, startDate, endDate, responsibilities, website, logo}) => (
  <div className="experience-card">
    <WorkExperienceCard
      position={position}
      company={company}
      startDate={startDate}
      endDate={endDate}
      responsibilities={responsibilities}
      website={website}
      logo={logo}
    />
  </div>
);

const works = WorkExperienceData;

function WorkExperience() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          Work <strong className="purple">Experiences</strong>
        </h1>
        <div style={{ justifyContent: "center", paddingBottom: "10px",}}>
            {works?.map((work, index) => (
              <Work 
                key={index}  
                position={work?.position} 
                company={work?.company}
                startDate={work?.startDate}
                endDate={work?.endDate}
                responsibilities={work?.responsibilities}
                website={work?.website}
                logo={work?.logo}
              />
            ))}
        </div>
      </Container>
    </Container>
  );
}

export default WorkExperience;
