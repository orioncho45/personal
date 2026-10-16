import "./skills.css";

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-desc">{description}</p>
    </div>
  );
};

export default SkillCard;
