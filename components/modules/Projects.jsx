import ProjectCard from "./ProjectCard";
import projectData from "../data/projects.json";
import Button from "../elements/Button";

const Projects = () => {
  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Works</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>

      <article className="project">
        {projectData?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              path={project.path}
              background={project.background}
              title={project.title}
              caption={project.caption}
              gitHubLink={project.gitHubLink}
              siteLink={project.siteLink}
            />
          );
        })}
      </article>

      {/* <Button path="#" type="secondary">
        See More
        <i className="fas fa-arrow-right"></i>
      </Button> */}
    </section>
  );
};
export default Projects;
