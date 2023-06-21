import React, { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/paws-gb0cab7af7_1280.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import axios from "axios";

const LoginAsAdmin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3002/admin_password/${email}/${password}`
      );

      const success = response.data.length > 0;

      if (success > 0) {
        let valid = 1;

        axios
          .get(`http://localhost:3002/login_insert/${email}/admin/1`)
          .then((res) => {
            if (res.data.errorNum === 20003) {
              alert("Already Logged in");
              console.error("Already logged in");
              valid = 0;
            }
            if (valid === 1) {
              console.log("Login successful:", response.data[0][2]);
              navigate(from, { replace: true });
            }
          });
      } else {
        alert("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
          <form onSubmit={handleLogin}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            {/* password field */}
            <div className="form-control w-full max-w-xs pb-7">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
                required
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

export default LoginAsAdmin;
