import skillSet from "../constants/skillSet";
const Skills = () =>{
  return(
    <div className="skills-container">
      <div className="component-header">
        <p className="header-name">Skills</p>
      </div>
      <div className="skill-type-container">
        {skillSet.map((skillType, index)=>(
          <div className="skill-set-container" key={index}>
            <p className="type-header">{skillType.type}</p>
            <div className="skill-container">
              {
                skillType.skills.map((skill,skillIndex)=>(
                    <div className="skill-details">
                      <img src={skill.ref}/>
                      <p>{skill.name}</p>
                    </div>
                  ) 
                )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Skills;