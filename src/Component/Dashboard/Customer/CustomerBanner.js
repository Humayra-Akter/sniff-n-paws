import React from "react";
import { Link } from "react-router-dom";

const CustomerBanner = () => {
  const menuItems = (
    <>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-xs text-blue-700"
          to={"/dashboard/customers"}
        >
          customers
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-xs text-blue-700"
          to={"/dashboard/customers/pricing"}
        >
          pricing
        </Link>
      </li>

      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-xs text-blue-700"
          to={"/dashboard/customers/daycare"}
        >
          daycare
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-xs text-blue-700"
          to={"/dashboard/customers/cabin"}
        >
          cabin
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-50">
        <div className="navbar-end">
          <div className="dropdown">
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-50 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerBanner;
