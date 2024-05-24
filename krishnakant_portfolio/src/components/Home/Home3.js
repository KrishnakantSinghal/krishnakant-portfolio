import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import { useSelector } from 'react-redux';

const Project = ({ image, title, description, ghLink }) => (
  <div className="project-card">
    <ProjectCard
      imgPath={image}
      title={title}
      description={description}
      ghLink={ghLink}
    />
  </div>
);

function Home3() {
  const projectData = useSelector((state) => state.projectData.projects);
  const getRandomProjects = (projectData) => {
    const shuffled = [...projectData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  const projects = getRandomProjects(projectData);

  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <div className="project-cards-container">
          {projects?.map((project, index) => (
            <Project
              key={index}
              image={project?.image}
              title={project?.title}
              description={project?.description}
              ghLink={project?.ghLink}
            />
          ))}
        </div>
        <Button variant="outline-info" className="text-light text-bold">
          <Link
            to="/projects"
            className="text-light font-weight-bold text-decoration-none"
          >
            View more
          </Link>
        </Button>
      </Container>
    </Container>
  );
}

export default Home3;
