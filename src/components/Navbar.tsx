import { IoMoonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-6 mx-auto shadow-sm border-b border-b-dark-gray">
      <div className="container flex justify-between">
        <h1 className=" text-base sm:text-2xl font-bold ">
          Where in the world?
        </h1>
        <button type="button" className="flex items-center gap-1 sm:gap-2">
          <IoMoonOutline className=" text-lg" />
          <span className="sm:font-medium">Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
