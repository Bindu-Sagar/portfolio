import educationData from "../Constants/educationData";

const Education = () => {
  return (
    <div className="education" id="education">
      <h1 className="items-header">Education</h1>
      <div className="education-timeline">
        {/* Vertical line */}
        <div className="timeline-line" />

        {educationData.map((education, index) => {
          const isRight = index % 2 === 0;
          return (
            <div
              key={education.institution + index}
              className={`education-item ${isRight ? "right" : "left"}`}
            >
              {/* Arrow */}
              <div className={`education-arrow ${isRight ? "right-arrow" : "left-arrow"}`} />

              {/* Logo over timeline */}
              <div className="education-logo-container">
                <img
                  className="education-logo"
                  src={education.logo}
                  alt={`${education.institution} logo`}
                />
              </div>

              {/* Details */}
              <div className="education-details">
                <h2 className="education-institution">{education.institution}</h2>
                <h3 className="education-degree">{education.degree}</h3>
                <h3 className="education-period">{education.period}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
