import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { WeLogo } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Utility function to check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-primary w-full py-5 sm:px-24 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between">
        <div>
          <img
            src={WeLogo}
            onClick={() => navigate("/")}
            alt="Logo"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-end max-sm:hidden gap-10 w-full">
          <div
            onClick={() => navigate("/work")}
            className={`px-5 text-lg cursor-pointer text-secondary font-inter font-medium transition-all duration-500 ${
              isActive("/work") ? "underline" : "hover:underline"
            }`}
          >
            Work
          </div>
          <div
            onClick={() => navigate("/aboutus")}
            className={`px-5 text-lg cursor-pointer text-secondary font-inter font-medium transition-all duration-500 ${
              isActive("/aboutus") ? "underline" : "hover:underline"
            }`}
          >
            About Us
          </div>
          <div
            className={`px-5 text-lg cursor-pointer text-secondary font-inter font-medium transition-all duration-500 ${
              isActive("/whatwedo") ? "underline" : "hover:underline"
            }`}
            onClick={() => navigate("/whatwedo")}
          >
            What We Do
          </div>
          <button
            className="flex items-center gap-3 px-[32px] py-[16px] bg-secondary text-white text-lg font-bold font-inter"
            onClick={() => navigate("/contactus")}
          >
            Contact Us{" "}
            <span>
              <ArrowTopRightIcon className="w-5 h-5" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
