import React, { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/paws-gb0cab7af7_1280.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  //let from = location.state?.from?.pathname || "/";
  let from =
    location.state && location.state.from && location.state.from.pathname
      ? location.state.from.pathname
      : "/";

  console.log(from);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        style={{
          background: `url(${img})`,
        }}
        className="card w-96 bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
            Login
          </h2>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          {/* email field */}
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs pb-7">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              type="submit"
              value="LOGIN"
            />
          </form>
          <p className="text-center">
            <small className="font-semibold">
              New to sniff-n-paws?
              <Link className="text-blue-700" to="/signup">
                Create new account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline font-bold bg-blue-100 text-xs text-blue-800"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
