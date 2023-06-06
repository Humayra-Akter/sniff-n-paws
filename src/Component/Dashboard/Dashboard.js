import React from "react";
import Admin from "./Admin/Admin";
import Staff from "./Staff";
import Vet from "./Vet";
import Customer from "./Customers/Customer";
import Animal from "./Animals/Animal";
import Rescuer from "./Rescuer";
import AdminPhn from "./Admin/AdminPhn";
import AdminInsertForm from "./Admin/AdminInsertForm";
import AdminDeleteForm from "./Admin/AdminDeleteForm";
import AdminUpdateForm from "./Admin/AdminUpdateForm";

const Dashboard = () => {
  return (
    <div className="pt-20 pb-40">
      <Admin></Admin>
      <AdminInsertForm></AdminInsertForm>
      <AdminDeleteForm></AdminDeleteForm>
      <AdminUpdateForm></AdminUpdateForm>
      {/* <Animal></Animal>
      <AdminPhn></AdminPhn>
      <Staff></Staff>
      <Vet></Vet>
      <Customer></Customer>
      <Rescuer></Rescuer> */}
    </div>
  );
};

export default Dashboard;
