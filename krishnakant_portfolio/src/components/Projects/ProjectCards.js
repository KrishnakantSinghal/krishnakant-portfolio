import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import imageNotFound from "../../Assets/image_not_found.jpeg";

function ProjectCards(props) {
  const imgSrc = props.imgPath || imageNotFound;
  return (
    <Card className="project-card-view ">
      <Card.Img variant="top" src={imgSrc} alt="card-img"  />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>{props.description}</Card.Text>
        
        <div className="">
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub />
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{borderRadius:"50%",margin:1}}
          >
            <CgWebsite /> 
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
