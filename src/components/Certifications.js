import certificate from "../constants/certificate";

const Certifications = () =>{
  return(
    <div className="certifications-container" id="certificates">
      <div className="component-header">
        <p className="header-name">Certifications</p>
      </div>
      <div className="certification-cards">
      {
        certificate.map((data,index)=>{
          return(
            <div className="certificate-card" key={index}>
              <p className="title">{data.title}</p>
              <img src={data.image} alt={data.title} className="certificate-image" />
              <a href={data.link}>Link</a>
              <p className="date">{data.date}</p>
              <p className="description">{data.description}</p>
              <p className="institution">{data.institution}</p>
            </div>
          )
        } )
      }
      </div>
    </div>
  )
}
export default Certifications;