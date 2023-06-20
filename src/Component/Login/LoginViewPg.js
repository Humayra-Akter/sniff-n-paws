import React from "react";
import { Link } from "react-router-dom";

const LoginViewPg = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Login view
          </h2>
          <Link to="/loginAdmin">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
              value="LOGIN AS ADMIN"
            />
          </Link>
          <Link to="/loginStaff">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
              value="LOGIN AS STAFF"
            />
          </Link>
          <Link to="/loginCustomer">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
              value="LOGIN AS CUSTOMER"
            />
          </Link>
          <Link to="/loginVet">
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
              value="LOGIN AS VET"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginViewPg;
