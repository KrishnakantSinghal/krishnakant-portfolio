import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumepdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
         <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumepdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Container>
            <embed src={resumepdf} width="800px" height="1200px" />
          </Container>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
