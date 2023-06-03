import React, { useEffect, useState } from "react";
import AdminUserRow from "./AdminUserRow";

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/query")
      .then((res) => res.json())
      .then((datam) => {
        setAdmins(datam);
      });
  }, []);

  return (
    <div className="pt-40 pb-56">
      <div className="overflow-x-auto">
        <h1 className="font-semibold text-2xl text-pink-400">
          Total Admins: {admins.length}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>admin_id</th>
              <td>name</td>
              <td>email</td>
              <td>gender</td>
              <td>city</td>
              <td>street</td>
              <td>house</td>
              <td>dob</td>
              <td>salary</td>
              <td>designation</td>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <AdminUserRow key={admin.admin_id} admin={admin}></AdminUserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
