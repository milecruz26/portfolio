import datasProject from "./datasProject";
import "./style.css";

export const Projects = () => {
  return (
    <>
      {datasProject.map((project) => (
        <a href={project.URL} target="_blank" className="link-project">
          <div className="project-container" key={project.id}>
            <figure className={project.className} />
            <h3>{project.titulo}</h3>
            <h4>{project.description}</h4>
          </div>
        </a>
      ))}
    </>
  );
};
