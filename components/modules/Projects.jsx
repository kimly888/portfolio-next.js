import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="project-container container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Works</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>

      <article className="project">
        {/* <!-- Project 1 --> */}
        <ProjectCard
          path={"/"}
          title={"Project One"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />

        {/* <!-- Project 2 --> */}
        <ProjectCard
          path={"/"}
          title={"Project Two"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />

        {/* <!-- Project 3 --> */}
        <ProjectCard
          path={"/"}
          title={"Project Three"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />

        {/* <!-- Project 4 --> */}
        <ProjectCard
          path={"/"}
          title={"Project Four"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />

        {/* <!-- Project 5 --> */}
        <ProjectCard
          path={"/"}
          title={"Project Five"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />

        {/* <!-- Project 6 --> */}
        <ProjectCard
          path={"/"}
          title={"Project Six"}
          caption={"React, Redux, SASS"}
          gitHubLink={"/"}
          siteLink={"/"}
        />
      </article>

      <a href="#" className="btn btn-secondary" target="_blank">
        See More <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  );
};
export default Projects;
