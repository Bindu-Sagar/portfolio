import { useState } from "react";
import experienceData from "../Constants/experienceData";

const Experience = () => {
  const [activeId, setActiveId] = useState(experienceData[0].id);

  const activeExperience = experienceData.find((exp) => exp.id === activeId);

  return (
    <div className="experience" id="experience">
      <h1 className="items-header">Work Experience</h1>
      <p className="experience-subtitle">Here's my professional journey so far.</p>

      <div className="experience-layout">
        {/* Sidebar */}
        <div className="experience-sidebar">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`experience-tab ${activeId === exp.id ? "active" : ""}`}
              onClick={() => setActiveId(exp.id)}
            >
              <h4>{exp.role}</h4>
              <p>{exp.company}</p>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="experience-detail">
          <div className="experience-detail-header">
            <div>
              <h2>{activeExperience.role}</h2>
              <h3>{activeExperience.company}</h3>
            </div>
            <span className="experience-duration">{activeExperience.duration}</span>
          </div>

          <hr className="experience-divider" />

          <div className="experience-section">
            <h4 className="experience-section-title">Details:</h4>
            <ul className="experience-responsibilities">
              {activeExperience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* You can add projects or tech stack here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
