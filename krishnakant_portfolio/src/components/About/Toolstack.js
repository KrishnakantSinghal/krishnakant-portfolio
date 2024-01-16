import React from "react";


// Create a Tool component to render each tool
const Tool = ({ Icon, name }) => (
  <div className="tech-icons">
    <div>
      <Icon />
    </div>
    <div style={{ display: "grid" }}>
      <b className="techstack">{name}</b>
    </div>
  </div>
);

function Toolstack({toolData}) {
    return (
      <div className="tech-container">
        {toolData?.map((tool, index) => (
          <Tool key={index} Icon={tool?.icon} name={tool?.name} />
        ))}
      </div>
    );
}

export default Toolstack;
