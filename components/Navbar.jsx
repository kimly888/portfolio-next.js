import Image from "next/image";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const { isActive, setIsActive } = useStateContext();

  const handleMobileMenu = () => {
    setIsActive((prev) => !prev);
  };

  const handleTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark"); //add this
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light"); //add this
    }
  };

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="container">
          {/* <!-- Logo --> */}
          <h1 id="logo">
            <a href="https://github.com/CommunityPro/portfolio-html">
              <Image src="/logo.png" width={25} height={25} alt="Site Logo" />
            </a>
          </h1>

          {/* <!-- Navbar links --> */}
          <ul className={`nav-menu ${isActive && "active"}`}>
            <li>
              <a
                className="nav-link"
                href="#projects"
                onClick={handleMobileMenu}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={handleMobileMenu}>
                CONTACT
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={handleMobileMenu}>
                BlOG
              </a>
            </li>
            <li>
              <a
                className="nav-link btn btn-primary"
                href="https://github.com/CommunityPro/portfolio-html"
                onClick={handleMobileMenu}
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </a>
            </li>

            {/* <!-- Toggle switch --> */}
            <div className="theme-switch">
              <input
                type="checkbox"
                id="switch"
                onClick={(e) => handleTheme(e)}
              />
              <label className="toggle-icons" htmlFor="switch">
                <Image
                  className="moon"
                  src="/moon.svg"
                  width={32}
                  height={32}
                  alt="moon icon to toggle dark mode"
                />
                <Image
                  className="sun"
                  src="/sun.svg"
                  width={32}
                  height={32}
                  alt="sun icon to toggle dark mode"
                />
              </label>
            </div>
          </ul>

          {/* <!-- Hamburger menu --> */}
          <div
            className={`hamburger ${isActive && "active"}`}
            onClick={handleMobileMenu}
          >
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
