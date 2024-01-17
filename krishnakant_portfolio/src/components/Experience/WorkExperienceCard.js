import React from "react";

function workExperienceCard(props) {
    console.log(props)
  return (
    <div style={{ fontSize: "1.5rem", width: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }} className="experience-card-view">
      <div style={{ margin: "10px", padding: "15px" }}>
        <div style={{ textAlign: "left" }}>
          <div style={{ marginBottom: "10px" }}>
            <strong>{props.position}</strong>
          </div>
          <div>
            <a href={props.website} target="_blank">
              {props.company}
            </a>
          </div>
          <div style={{ fontSize: ".9rem" }}>
            {props.startDate} - {props.endDate}
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
            <div>
            {props.logo && (
                <img className="company-logo" src={props.logo} alt="Company Logo" />
            )}
            </div>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            {props.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default workExperienceCard;
