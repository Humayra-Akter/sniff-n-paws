import React from "react";
import img from "../../assets/images/pets-g1111451cc_1280.jpg";
import img2 from "../../assets/images/favicon.ico";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/dashboard"}
        >
          dashboard
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/donation"}
        >
          donation
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/contact"}
        >
          contact
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/about"}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-pink-500"
          to={"/login"}
        >
          login
        </Link>
      </li>
    </>
  );
  return (
    // <div
    //   style={{
    //     background: `url(${img})`,
    //   }}
    // >
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img height={20} width={60} src={img2} />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        {/* <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
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
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
