import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/footprints-g19010b4f3_1280.png";
import CustomerInsert from "../Dashboard/Customer/CustomerInsert";

const Signup = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <CustomerInsert></CustomerInsert>
    // <div className="flex justify-center items-center h-screen">
    //   <div
    //     style={{
    //       background: `url(${img})`,
    //     }}
    //     className="card w-96 bg-base-100 shadow-xl"
    //   >
    //     <div className="card-body">
    //       <h2 className="text-center text-2xl text-blue-700 uppercase font-bold">
    //         signup
    //       </h2>
    //       {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    //       {/* email field */}
    //       <form>
    //         <div className="form-control w-full max-w-xs">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="Your Email"
    //             className="input input-bordered w-full max-w-xs"
    //           />
    //         </div>
    //         {/* password field */}
    //         <div className="form-control w-full max-w-xs">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="password"
    //             placeholder="Your Password"
    //             className="input input-bordered w-full max-w-xs"
    //           />
    //         </div>
    //         <input
    //           className="btn w-full max-w-xs text-white"
    //           type="submit"
    //           value="SIGNUP"
    //         />
    //       </form>
    //       <p className="text-center">
    //         <small className="font-semibold">
    //           Already have an account to sniff-n-paws?
    //           <Link className="text-blue-700" to="/login">
    //             Login
    //           </Link>
    //         </small>
    //       </p>
    //       <div className="divider">OR</div>
    //       <button className="btn btn-outline font-bold bg-blue-100 text-xs text-blue-800">
    //         Continue with Google
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
