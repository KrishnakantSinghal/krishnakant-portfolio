import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CloseButton from 'react-bootstrap/CloseButton';

function ProjectDetailsModal(props) {
  const { show, onHide, title, description, project_detail_images } = props;
  
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header className="project-detail-header">
          <Modal.Title className="project-detail-title">{title}</Modal.Title>
          <CloseButton onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body className="project-details-body">
          <p className="product-detailed-description">{description}</p>
          <div className="photos-container">
            {project_detail_images?.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index}`} className="project-photo" />
          ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectDetailsModal;
