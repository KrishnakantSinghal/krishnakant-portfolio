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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  const handleDownloadCVClick = ({ component_id }) => {
    if (location.pathname === "/resume" || location.pathname === "/projects") {
      navigate("/");
      setTimeout(() => {
        scrollTo(component_id);
      }, 100);
    } else {
      scrollTo(component_id);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav className={`complete-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <Nav.Item>
        <Button onClick={() => handleDownloadCVClick({ component_id: "home" })}>
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
                onClick={() => handleDownloadCVClick({ component_id: "about" })}
              >
                <AiOutlineUser className="nav-icons" /> About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                className="nav-link"
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
  );
}

export default NavBar;
