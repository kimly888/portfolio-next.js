const ProjectCard = ({
  path,
  background,
  title,
  caption,
  gitHubLink,
  siteLink,
}) => {
  return (
    <div
      href={path}
      className="card"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="project-info">
        <div className="project-bio">
          <h3>{title}</h3>
          <p>{caption}</p>
        </div>

        <div className="project-link">
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer">
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
