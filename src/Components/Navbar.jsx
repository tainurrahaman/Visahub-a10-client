import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("Successfully Logout");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="navbar px-4 sm:px-6 lg:px-8 bg-base-100">
      {/* Navbar Start: Logo and Mobile Menu */}
      <div className="navbar-start gap-2 md:gap-4">
        {/* Mobile Menu Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-semibold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/visas">All Visas</Link>
            </li>
            {user?.email && (
              <>
                <li>
                  <Link to="/addVisa">Add Visa</Link>
                </li>
                <li>
                  <Link to="/visaApplication">My Visa Application</Link>
                </li>
                <li>
                  <Link to="/userAddedVisa">My Added Visa</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo and Brand Name */}
        <div className="max-w-8 md:max-w-10">
          <img src={logo} alt="Website Logo" className="rounded-full" />
        </div>
        <a className="text-[#034833] font-bold text-lg md:text-2xl lg:text-3xl">
          VisaHub
        </a>
      </div>

      {/* Navbar Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/visas">All Visas</Link>
          </li>
          {user?.email && (
            <>
              <li>
                <Link to="/addVisa">Add Visa</Link>
              </li>
              <li>
                <Link to="/visaApplication">My Visa Application</Link>
              </li>
              <li>
                <Link to="/userAddedVisa">My Added Visa</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End: Login/Logout and User Profile */}
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-4">
            {/* User Profile Image with Hover Effect */}
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName}
              </div>
            </div>
            {/* Logout Button */}
            <Link
              onClick={handleLogout}
              to="/"
              className="btn bg-[#034833] text-white"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to="/signup" className="font-bold">
              SignUp
            </Link>
            <Link to="/login" className="btn bg-[#034833] text-white">
              Login
            </Link>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Navbar;
