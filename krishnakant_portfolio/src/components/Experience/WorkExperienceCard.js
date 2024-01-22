import React from "react";

function WorkExperienceCard(props) {
  return (
    <div className="experience-card-view">
      <div className="company-details">
        <div className="position">
          <strong>{props.position}</strong>
        </div>
        <div className="company-name">
          {props.website ? (
            <a href={props.website} target="_blank" rel="noreferrer">
              {props.company}
            </a>
          ) : (
            <p>{props.company}</p>
          )}
        </div>
        <div className="duration">
          {props.startDate} - {props.endDate}
        </div>

        {props.logo && (
          <img className="company-logo" src={props.logo} alt="Company Logo" />
        )}
      </div>
      <div className="responsibilities">
        <ul className="responsibilities-list">
          {props.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
