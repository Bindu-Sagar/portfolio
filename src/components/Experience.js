import experienceData from "../constants/experienceData";

const Experience = () =>{
  return(
    <div className="experience-container">
      <div className="component-header">
        <p className="header-name">Experience</p>
      </div>
      {
        experienceData.map((data,index)=>{
          return(
            <div className="experience-card" key={index}>
              <p className="role">{data.role}</p>
              <p className="company">{data.company}</p>
              <p className="date">{data.startDate} - {data.endDate}</p>
              <p className="job-description">{data.description}</p>
            </div>
          )
        } )
      }
    </div>
  )
}
export default Experience;