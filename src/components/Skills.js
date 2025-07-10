import skillSet from '../Constants/skillSet';
const Skills = () => {
  return (
    <div className="skills-container" id='skills'>
      <h1 className="items-header">Skills</h1>
      <ul>
        {skillSet.map((category, index) => (
         <li className='skill-list-item' key={index}> 
          <div key={index} className="skill-group">
            <h2 className="skill-type">{category.type}</h2>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill.skill}</li>
              ))}
            </ul>
          </div>
          <hr/>
         </li> 
      ))}
      </ul>
    </div>
  );
}
export default Skills;