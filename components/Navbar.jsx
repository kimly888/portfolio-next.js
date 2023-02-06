const Navbar = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav class="navbar">
        <div class="container">
          {/* <!-- Logo --> */}
          <h1 id="logo">
            <a href="https://github.com/CommunityPro/portfolio-html">
              <img src="/logo.png" alt="Your Logo" />
            </a>
          </h1>
          {/* <!-- Navbar links --> */}
          <ul class="nav-menu">
            <li>
              <a class="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                BlOG
              </a>
            </li>
            <li>
              <a
                class="nav-link btn btn-primary"
                href="https://github.com/CommunityPro/portfolio-html"
              >
                RESUME <i class="fas fa-arrow-right"></i>
              </a>
            </li>

            {/* <!-- Toggle switch --> */}
            <div class="theme-switch">
              <input type="checkbox" id="switch" />
              <label class="toggle-icons" for="switch">
                <img class="moon" src="/moon.svg" />
                <img class="sun" src="/sun.svg" />
              </label>
            </div>
          </ul>

          {/* <!-- Hamburger menu --> */}
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
