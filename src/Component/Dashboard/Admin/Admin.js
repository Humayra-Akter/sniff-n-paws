import React, { useEffect, useState } from "react";
import AdminUserRow from "./AdminUserRow";

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/admin")
      .then((res) => res.json())
      .then((datam) => {
        setAdmins(datam);
        // console.log(admins[3]);
      });
  }, []);

  const [records, setRecords] = useState([]);

  const handleDelete = async (admin_id) => {
    try {
      console.log(admin_id);
      // Make an HTTP DELETE request to your backend API endpoint
      const response = await fetch(`/api/records/${admin_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If the delete operation was successful, update the state to remove the deleted record
        setRecords(records.filter((record) => record.admin_id !== admin_id));
      } else {
        // Handle error cases
        // You can display an error message or handle the error in any other way
        console.error("Failed to delete the record.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the record:", error);
    }
  };

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
              <td>Address</td>
              <td>Date of birth</td>
              <td>Age</td>
              <td>phone</td>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <AdminUserRow
                key={admin.admin_id}
                admin={admin}
                onDelete={handleDelete}
              ></AdminUserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
