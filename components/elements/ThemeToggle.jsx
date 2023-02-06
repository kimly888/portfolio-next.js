import Image from "next/image";

const ThemeToggle = () => {
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
    <div className="theme-switch">
      <input type="checkbox" id="switch" onClick={(e) => handleTheme(e)} />
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
  );
};

export default ThemeToggle;
