import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import resumepdf from "../Assets/resume.pdf";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineDownload,
  AiOutlineProject,
  AiOutlineTool,
} from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [width, setWidth] = useState(1200);
  const isMobile = width <= 769;
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCVClick = ({ component_id }) => {
    if (location.pathname === "/resume") {
      navigate("/");
      scrollTo(component_id);
    } else {
      scrollTo(component_id);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Nav className="complete-navbar">
        <Nav.Item>
          <Button as={Link} to="/">
            <AiOutlineHome />
          </Button>
        </Nav.Item>

        <div className="right-nav">
          {isMobile ? (
            <Nav.Item>
              <Button variant="primary" href={resumepdf} target="_blank">
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Nav.Item>
          ) : (
            <>
              <Nav.Item>
                <ScrollLink
                  className="nav-link"
                  to="about"
                  onClick={() =>
                    handleDownloadCVClick({ component_id: "about" })
                  }
                >
                  <AiOutlineUser className="nav-icons" /> About
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  className="nav-link"
                  to="skills"
                  onClick={() =>
                    handleDownloadCVClick({ component_id: "skills" })
                  }
                >
                  <AiOutlineTool className="nav-icons" /> Skills
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  className="nav-link"
                  to="projects"
                  onClick={() =>
                    handleDownloadCVClick({ component_id: "projects" })
                  }
                >
                  <AiOutlineProject className="nav-icons" /> Projects
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <ScrollLink
                  className="nav-link"
                  to="experiences"
                  onClick={() =>
                    handleDownloadCVClick({ component_id: "experiences" })
                  }
                >
                  <MdWorkHistory className="nav-icons" /> Experiences
                </ScrollLink>
              </Nav.Item>

              <Nav.Item>
                <Button as={Link} to="/resume">
                  <AiOutlineDownload /> Download CV
                </Button>
              </Nav.Item>
            </>
          )}
        </div>
      </Nav>
    </div>
  );
}

export default NavBar;
