import React from "react";


// Create a Skill component to render each skill
const Skill = ({ Icon, name }) => (
  <div className="skill-icons">
    <div>
      <Icon />
    </div>
    <div style={{ display: "grid" }}>
      <b className="skillstack">{name}</b>
    </div>
  </div>
);

function SkillStack({skillData}) {
    return (
      <div className="skill-container">
        {skillData?.map((skill, index) => (
          <Skill key={index} Icon={skill?.icon} name={skill?.name} />
        ))}
      </div>
    );
}

export default SkillStack;
