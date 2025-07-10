import Hello from "./Hello";
import gmailIcon from '../utils/images/gmail.png';
import linkedinIcon from '../utils/images/linkedin.png';
import githubIcon from '../utils/images/github.png';
import profile from '../utils/images/profile1.png';
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
          <Hello />
          <h2 className="intro-name">I'm Bindu Sagar,</h2>
          <h2 className="intro-role">Java Full Stack Devolper</h2>
          <div className="intro-info">
            <p>I'm a Computer Science graduate with over 3 years 
              of experience in full-stack development, especially 
              on the backend side. I’ve worked with stacks like MERN, 
              Spring Boot, and RESTful microservices, and I enjoy building 
              applications that are clean, scalable, and user-friendly. I’m 
              most comfortable working with Java, React, MongoDB, and MySQL, 
              and I also have experience with tools like Docker, Jenkins, and 
              AWS.
            </p>
            <p>
              I enjoy taking projects end to end — from building the 
              UI to wiring up the backend and deploying it to the cloud. 
              I also have a solid foundation in data structures and 
              algorithms, which helps me write efficient code and 
              solve real-world problems effectively.          
            </p>
            <p>
                Outside of coding, I’m probably 
                exploring tech YouTube channels, refining a side 
                project, or unwinding with some basketball or a quick 
                game session. I'm always up for solving interesting problems 
                and building something meaningful — let's make it happen!
            </p>
          </div>
          <div className="intro-buttons">
            <a href="mailto:bindusagar979@gmail.com" className="icon-link">
              <img src={gmailIcon} alt="gmail" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/bindusagarsinganamalla/" className="icon-link">
              <img src={linkedinIcon} alt="linkedin" className="icon" />
            </a>
            <a href="https://github.com/Bindu-Sagar" className="icon-link">
              <img src={githubIcon} alt="github" className="icon" />
            </a>
          </div>
      </div>
        <div className="intro-image">
          <div className="profile-border">
            <img src={profile} alt="🧑‍🦱" className="profile-image" />
          </div>
          <h2 className="image-title">Bindu Sagar Singanamalla</h2>
        </div>
    </div>
  );
}
export default Intro;