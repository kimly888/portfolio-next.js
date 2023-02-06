import { useStateContext } from "@/context/StateContext";

const Hamburger = ({ handleMobileMenu }) => {
  const { isActive } = useStateContext();

  return (
    <div
      className={`hamburger ${isActive && "active"}`}
      onClick={handleMobileMenu}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
