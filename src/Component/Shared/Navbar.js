import React from "react";
import img from "../../assets/images/pets-g1111451cc_1280.jpg";
import img2 from "../../assets/images/favicon.ico";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useLoginUsers from "../../hooks/useLoginUsers";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [handleLogin] = useLoginUsers();
  if (handleLogin.success == true) {
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/services"}
        >
          services
        </Link>
      </li>
      {user && (
        <li>
          <Link
            className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
            to={"/dashboard"}
          >
            Dashboard
          </Link>
        </li>
      )}

      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/feedbackGeneral"}
        >
          feedback
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/donate"}
        >
          Donate
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/contact"}
        >
          contact
        </Link>
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/about"}
        >
          About
        </Link>
      </li>
      <li>
        {user ? (
          <Link
            className="w-full h-full btn btn-ghost font-black uppercase text-center text-sm text-blue-700"
            onClick={logout}
          >
            Sign Out
          </Link>
        ) : (
          <Link
            className="w-full h-full btn btn-ghost font-black uppercase text-center text-sm text-blue-700"
            to={"/login"}
          >
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-50">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-50 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img height={20} width={60} src={img2} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
