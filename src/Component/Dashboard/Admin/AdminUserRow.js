import React from "react";

const AdminUserRow = ({ admin ,onDelete}) => {
  const handleDelete = () => {
    // Call the onDelete function passed as a prop, passing the record ID
    onDelete(admin.id);
  };

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
        <button className="btn btn-primary btn-sm text-white font-bold bg-red-500"
        onClick={handleDelete}>
          X
        </button>
      </td>
    </tr>
  );
};

export default AdminUserRow;
