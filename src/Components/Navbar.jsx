import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer } from "react-toastify";

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
    <div className="navbar px-0 bg-base-100">
      <div className="navbar-start gap-1 md:gap-2">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn px-0 btn-ghost md:hidden"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold space-x-3"
          >
            <Link to="/">Home</Link>
            <Link to="/allVisas">All Visas</Link>
          </ul>
        </div>
        <div className="max-w-6 md:max-w-10 object-center">
          <img src={logo} alt="Website Logo" className="rounded-full" />
        </div>
        <a className="text-[#034833] font-bold text-md md:text-3xl">VisaHub</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/allVisas">All Visas</Link>
          {user ? <Link to="/addVisa">Add Visa</Link> : ""}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Link
            onClick={handleLogout}
            to="/"
            className="btn bg-[#034833] text-white"
          >
            Logout
          </Link>
        ) : (
          <Link to="/login" className=" btn bg-[#034833] text-white">
            Login
          </Link>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
