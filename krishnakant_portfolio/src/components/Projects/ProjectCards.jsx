import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import imageNotFound from "../../Assets/image_not_found.jpeg";
import ProjectDetailsModal from "./ProjectDetailsModel";
// import abc from '../../Assets/Projects/dokifiai/'

function ProjectCards(props) {  
  const [showModal, setShowModal] = useState(false);

  const imgSrc = props.imgPath || imageNotFound;

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  console.log("dekh lu m bhi zara", props?.project_detail_images)

  return (
    <>
      <Card className="project-card-view" onClick={handleModalOpen}>
        <Card.Img variant="top" src={imgSrc} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div>
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <ProjectDetailsModal
        show={showModal}
        onHide={handleModalClose}
        title={props.title}
        description={props.description}
        photos={props.project_detail_images}
      />
    </>
  );
}

export default ProjectCards;
