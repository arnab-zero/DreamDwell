import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li className="hover:underline">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:underline">
        <Link to="/update-profile">Update Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar border-2 rounded-lg bg-[#FAF9F6] px-5 md:px-10 lg:px-16 py-5 items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 text-[#0047AB]"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn text-lg md:text-xl lg:text-2xl text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 rounded-lg"
        >
          DreamDwell
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#0047AB] text-base font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end text-[#1434A4] text-lg font-semibold hover:underline hover:text-[#00008B]">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
