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
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project One</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Project 2 --> */}
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Two</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Project 3 --> */}
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Three</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Project 4 --> */}
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Four</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Project 5 --> */}
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Five</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Project 6 --> */}
        <div href="" className="card">
          <div className="project-info">
            <div className="project-bio">
              <h3>Project Six</h3>
              <p>React, Redux, SASS</p>
            </div>

            <div className="project-link">
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </article>

      <a href="#" className="btn btn-secondary" target="_blank">
        See More <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  );
};
export default Projects;
