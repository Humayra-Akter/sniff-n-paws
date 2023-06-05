import React from "react";
import Admin from "./Admin/Admin";
import Staff from "./Staff";
import Vet from "./Vet";
import Customer from "./Customers/Customer";
import Animal from "./Animals/Animal";
import Rescuer from "./Rescuer";
import AdminPhn from "./Admin/AdminPhn";

const Dashboard = () => {
  return (
    <div>
      <Admin></Admin>
      <Animal></Animal>
      <AdminPhn></AdminPhn> 
      <Staff></Staff>
      <Vet></Vet>
      <Customer></Customer>
      <Rescuer></Rescuer>
    </div>
  );
};

export default Dashboard;
