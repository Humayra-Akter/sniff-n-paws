import React from "react";
import Admin from "./Admin";
import { Button } from "react-daisyui";

const AdminUserRow = ({ admin }) => {
  const mayesha = admin[2];
  console.log(mayesha);

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
        <Button></Button>
      </td> </tr>
  );
};

export default AdminUserRow;
