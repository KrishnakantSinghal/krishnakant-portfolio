import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectscarddata from "./ProjectCardData";

const Project = ({ image, title, description, ghLink }) => (
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={image}
      title={title}
      description={description}
      ghLink={ghLink}
    />
  </Col>
);

const projects = projectscarddata;

function Projects() {
  return (
    <Container fluid className="project-section">
       <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects?.map((project, index) => (
              <Project 
                key={index} 
                image={project?.image} 
                title={project?.title} 
                description={project?.description} 
                ghLink={project?.ghLink} 
              />
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
