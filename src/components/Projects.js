import { useState } from "react";
import projectsData from "../Constants/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <div className="projects" id="projects">
      <h1 className="items-header">Projects</h1>
      <div className="project-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-item">
            <h2 className="project-title">{project.title}</h2>
            <h3 className="project-role">{project.role}</h3>
            <h3 className="project-client">{project.client}</h3>
            <h3 className="project-duration">{project.duration}</h3>
            <button className="res-button" onClick={() => handleOpen(project)}>
              Responsibility
            </button>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedProject && (
        <div className="project-modal">
          <button className="modal-close" onClick={handleClose}>✖</button>
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <h3>{selectedProject.role}</h3>
            <ul>
              {selectedProject.responsibilities?.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
