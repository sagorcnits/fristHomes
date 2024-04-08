import { NavLink } from "react-router-dom";
import userImg from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="navbar my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/update"
              className={({ isActive, isPending }) =>
                isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
              }
            >
              <li>Update Profile</li>
            </NavLink>
          </ul>
        </div>
        <a className=" cursor-pointer text-[30px] font-bold poppins-bold hidden lg:flex">
          FristHomes
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] poppins-reguler">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
            }
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/update"
            className={({ isActive, isPending }) =>
              isPending ? "pending " : isActive ? "active btn-li" : "btn-li"
            }
          >
            <li>Update Profile</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end poppins-reguler gap-2">
        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer overflow-hidden">
          <img src={userImg} alt="user" />
        </div>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
