import { useStateContext } from "@/context/StateContext";
import Hamburger from "../elements/Hamburger";
import ThemeToggle from "../elements/ThemeToggle";
import Logo from "../elements/Logo";
import Button from "../elements/Button";

const Navbar = () => {
  const { isActive, setIsActive } = useStateContext();

  const handleMobileMenu = () => setIsActive((prev) => !prev);

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="container">
          <Logo />
          <Hamburger handleMobileMenu={handleMobileMenu} />

          {/* <!-- Navbar links --> */}
          <ul className={`nav-menu ${isActive && "active"}`}>
            <li>
              <a
                className="nav-link"
                href="#projects"
                onClick={handleMobileMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#footer" onClick={handleMobileMenu}>
                Contact
              </a>
            </li>
            {/* <li>
              <a className="nav-link" href="#" onClick={handleMobileMenu}>
                Blog
              </a>
            </li> */}
            <li>
              <Button
                className="nav-link"
                path="https://flowcv.com/resume/n1aquwk0cr"
                type="primary"
              >
                Resume&nbsp;&nbsp;<i className="fas fa-download"></i>
              </Button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
