import React, { useEffect, useState } from "react";
import img from "../../assets/images/pets-g1111451cc_1280.jpg";
import img2 from "../../assets/images/favicon.ico";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useLoginUsers from "../../hooks/useLoginUsers";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3002/login_status")
      .then((response) => response.json())
      .then((data) => {
        const statusFromBackend = data.isStatusTrue;
        setStatus(statusFromBackend);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [handleLogin] = useLoginUsers();
  if (handleLogin.success === true) {
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    setStatus(false);
  };
  const renderLoginOrSignOut = () => {
    if (user) {
      if (status) {
        return (
          <Link
            className="w-full h-full btn btn-ghost font-black uppercase text-center text-sm text-blue-700"
            onClick={logout}
          >
            Sign Out
          </Link>
        );
      } else {
        return <Link to="/logout"></Link>;
      }
    } else {
      if (status) {
        return (
          <Link
            className="w-full h-full btn btn-ghost font-black uppercase text-center text-sm text-blue-700"
            to={"/loginView"}
          >
            Login
          </Link>
        );
      } else {
        return null;
      }
    }
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
      <li>{renderLoginOrSignOut()}</li>
      <li>
        {status ? (
          <Link to="/logout">Sign Out</Link>
        ) : (
          <Link
            className="w-full h-full btn btn-ghost font-black uppercase text-center text-sm text-blue-700"
            to={"/loginView"}
          >
            Login
          </Link>
        )}
      </li>
      <li>
        <Link
          className="w-full h-full font-black uppercase text-center text-sm text-blue-700"
          to={"/logout"}
        >
          logout
        </Link>
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
          <img height={20} width={60} src={img2} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
