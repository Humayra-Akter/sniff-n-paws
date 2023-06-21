import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const LoginAsAdmin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3002/customer_password/${email}/${password}`
      );

      const success = response.data.length > 0;

      if (success) {
        axios
          .get(`http://localhost:3002/login_insert/${email}/customer/1`)
          .then((res) => {
            if (res.data.errorNum === 20003) {
              setLoading(false);
              setError("Already logged in");
              toast.error("Already logged in");
              setEmail("");
              setPassword("");
            } else {
              setUser(response.data[0][2]);
              setLoading(false);
              setError(null);
              toast.success("Successfully logged in");
            }
          });
      } else {
        setLoading(false);
        setError("Invalid email or password");
        toast.error("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setLoading(false);
      setError("Error during login");
      toast.error("Error during login");
      console.error("Error during login:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogout = () => {
    // Perform any necessary actions for logout
    setUser(null);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-2xl text-blue-700 uppercase font-bold">
            {user ? `Welcome, ${user}!` : "Please log in"}
          </h1>
          {user ? (
            <button
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <button
                className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
                type="submit"
              >
                Login
              </button>
            </form>
          )}
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          <p className="text-center">
            <small className="font-semibold">
              New to sniff-n-paws?
              <Link className="text-blue-700" to="/signup">
                Create new account
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAsAdmin;
