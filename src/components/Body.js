import Experience from "./Experience";
import Header from "./Header";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import BackgroundCanvas from "./BackgroundCanvas";
import Copyright from "./Copyright"

const Body = () => {
  return (
    <div className="body" id="body">
  <BackgroundCanvas />
      <div className="body-content">
        <Header />
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Copyright />
      </div>
    </div>

  )
}
export default Body;