import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import resumepdf from "../Assets/resume.pdf"
import {
  AiOutlineHome,
  AiOutlineDownload
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [width, setWidth] = useState(1200);
  const isMobile = width <= 890; // Adjust the threshold as needed

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div style={{marginTop: "1rem"}}>
          <Nav
           defaultActiveKey="#home"
           style={{display:"block"}}
           >
            <Nav.Item className="centerise">
              <Button
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link-button"
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} />
              </Button>
            </Nav.Item>

            <Nav.Item style={{alignContent:"left"}} className="resume-btn centerise">
               
                {isMobile ? (
                  // Button for mobile view
                    <Button
                        variant="primary"
                        href={resumepdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                      >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                ) : (
                  <Button as={Link} to="/resume" onClick={() => updateExpanded(false)} className="nav-link-button">
                    <AiOutlineDownload style={{ marginBottom: "2px" }} /> Download CV
                  </Button>
                  )}
            </Nav.Item>

          </Nav>
    </div>
  );
}

export default NavBar;
