const Navbar = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="container">
          {/* <!-- Logo --> */}
          <h1 id="logo">
            <a href="https://github.com/CommunityPro/portfolio-html">
              <img src="/logo.png" alt="Your Logo" />
            </a>
          </h1>
          {/* <!-- Navbar links --> */}
          <ul className="nav-menu">
            <li>
              <a className="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                BlOG
              </a>
            </li>
            <li>
              <a
                className="nav-link btn btn-primary"
                href="https://github.com/CommunityPro/portfolio-html"
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </a>
            </li>

            {/* <!-- Toggle switch --> */}
            <div className="theme-switch">
              <input type="checkbox" id="switch" />
              <label className="toggle-icons" htmlFor="switch">
                <img className="moon" src="/moon.svg" />
                <img className="sun" src="/sun.svg" />
              </label>
            </div>
          </ul>

          {/* <!-- Hamburger menu --> */}
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
