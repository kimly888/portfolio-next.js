import { useStateContext } from "@/context/StateContext";
import Hamburger from "../elements/Hamburger";
import ThemeToggle from "../elements/ThemeToggle";
import Logo from "../elements/Logo";
import Button from "../elements/Button";

const Navbar = () => {
  const { isActive, setIsActive } = useStateContext();

  const handleMobileMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="container">
          <Logo />

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
              <Button
                className="nav-link"
                path="https://github.com/CommunityPro/portfolio-html"
                type="primary"
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </Button>
            </li>

            <ThemeToggle />
          </ul>

          <Hamburger handleMobileMenu={handleMobileMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
