import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineCheck } from 'react-icons/ai'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-description">
            Hello Everyone, I am <span className="purple">Krishna Kant Singhal </span>
            from <span className="purple"> Rajasthan, India. </span>
            A dynamic software developer proficient in Python and React. 
            Bridging the gap between Python's backend prowess and React's frontend elegance,
            specializes in creating harmonious, full-stack applications.
            <br/><br/>
            Apart from My Field, some other activities that I love to do!
          </p>
          <div>
          <ul style={{padding: "0"}}>
            <li className="about-activity">
              <AiOutlineCheck /> Singing
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Teaching
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Experiencing New Things
            </li>
          </ul>
          </div>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning something new everyday take you mile far than a lazy genius"{" "}
          </p>
          <footer className="blockquote-footer">Krishna Kant</footer>

          <div className="box-quote-container">
            <div className="box-quote">
              "It’s not about how fast you can go, but how well you can go fast."
            </div>
            <cite className="box-quote-author">— Jim Highsmith</cite>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
