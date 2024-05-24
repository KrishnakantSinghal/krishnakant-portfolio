import React from "react";
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const Project = ({ image, title, description, ghLink, project_detail_images }) => (
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={image}
      title={title}
      description={description}
      ghLink={ghLink}
      project_detail_images={project_detail_images}
    />
  </Col>
);


function Projects() {
  const projects = useSelector((state) => state.projectData.projects);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects?.map((project, index) => (
            <Project
              key={index}
              image={project?.image}
              title={project?.title}
              description={project?.description}
              ghLink={project?.ghLink}
              project_detail_images={project?.project_detail_images}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
