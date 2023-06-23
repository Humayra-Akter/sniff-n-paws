import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const handleLogout = () => {
    fetch("http://localhost:3002/logout");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Logout
          </h2>
          <Link to="/">
            <button
              className="btn btn-outline w-full font-bold bg-blue-100 text-sm text-blue-800"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
