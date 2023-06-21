import React, { useState } from "react";
import axios from "axios";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Logout = () => {
  const [user, setUser] = useState(null);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
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
  if (error || gerror) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (gloading || loading) {
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
            {user ? "Please log out" : `Continue as, ${user}!`}
          </h1>
          {user ? (
            <button
              className="btn btn-outline w-full font-bold bg-blue-100 text-xs text-blue-800"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <p>Already logged in</p>
          )}
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Logout;
