import experienceData from "../constants/experienceData";

const Experience = () =>{
  return(
    <div className="experience-container" id="experience">
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
              <ul className="exp-des">
                {data.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )
        } )
      }
    </div>
  )
}
export default Experience;