import { useStateContext } from "@/context/StateContext";

const Hamburger = ({ handleMobileMenu }) => {
  const { isActive } = useStateContext();

  return (
    <button
      className={`hamburger ${isActive && "active"}`}
      onClick={handleMobileMenu}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default Hamburger;
