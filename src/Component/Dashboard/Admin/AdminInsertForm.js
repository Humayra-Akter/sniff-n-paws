import React from "react";
import { Link } from "react-router-dom";

const AdminInsertForm = () => {
  const handleBooking = (event) => {
    event.preventDefault();
    //     const slot = event.target.slot.value;
        const admin = {
          adminId: admin_id,
          name: event.target.name.value,
          email: event.target.email.value,
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-pink-400 uppercase font-bold">
            Insert Admin
          </h2>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}

          <form
            onSubmit={handleBooking}
            className="justify-items-center grid grid-cols-1 gap-3 mt-4"
          >
            {/* name field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* email field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* gender field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <input
                type="text"
                name="gender"
                placeholder="Your Gender"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* City field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Your City"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* Street field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Street</span>
              </label>
              <input
                type="text"
                name="street"
                placeholder="Your Street"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* House field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">House</span>
              </label>
              <input
                type="text"
                name="house"
                placeholder="Your House"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* Dob field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">DOB</span>
              </label>
              <input
                type="text"
                name="dob"
                placeholder="Your DOB"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* salary field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">House</span>
              </label>
              <input
                type="number"
                name="salary"
                placeholder="Your salary"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* designation field */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Designation</span>
              </label>
              <input
                type="text"
                name="designation"
                placeholder="Your designation"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminInsertForm;
