import certificationData from "../Constants/certificationData";

const Certifications = () => {
  return (
    <div className="certifications" id="certifications">
      <h1 className="items-header">Certifications</h1>
      <div className="certifications-container">
        {certificationData.map((certification) => (
          <div key={certification.title} className="certification-item">
            <img className="certification-logo" src={certification.logo} alt={certification.title}/>
            <h2 className="certification-title">{certification.title}</h2>
            <h3 className="certification-issuer">{certification.issuer}</h3>
            <h3 className="certification-date">{certification.date}</h3>
            
            <a className="certification-link" href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">View Credential</a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Certifications;