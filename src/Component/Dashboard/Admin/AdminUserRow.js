import React from "react";

const AdminUserRow = ({ admin }) => {


  return (
    <tr>
      <th>{admin[0]}</th>
      <td>{admin[1]}</td>
      <td>{admin[2]}</td>
      <td>{admin[3]}</td>
      <td>{admin[4]}</td>
      <td>{admin[5]}</td>
      <td>{admin[6]}</td>
      <td>{admin[7]}</td>
      <td>{admin[8]}</td>
      <td>{admin[9]}</td>
      <td>
        <button className="btn btn-primary btn-sm text-white font-bold bg-red-500">
          X
        </button>
      </td>
    </tr>
  );
};

export default AdminUserRow;
