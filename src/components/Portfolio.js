import Description from "./Description";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Contact from "./Contact";
const Portfolio = () =>{
  return (
      <div>
        <Header /><hr/>
        <Description/>
        <Skills/>
        <Experience/>
        {/* <Projects/> */}
        <Certifications/>
        <Contact/>
      </div>
  )
}
export default Portfolio;