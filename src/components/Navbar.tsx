import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useDarkMode } from "../context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex justify-center dark:bg-dark-blue dark:text-white items-center py-6 mx-auto shadow-sm border-b border-b-dark-gray dark:border-b-dark-blue">
      <div className="container flex justify-between">
        <Link to="/">
          <h1 className=" text-base sm:text-2xl font-bold">
            Where in the world?
          </h1>
        </Link>
        <button
          type="button"
          className="flex items-center gap-1 sm:gap-2"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <IoMoonSharp className="text-lg" />
          ) : (
            <IoMoonOutline className="text-lg" />
          )}
          <span className="sm:font-medium">Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
