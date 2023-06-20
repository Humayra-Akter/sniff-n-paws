import React from "react";

const CabinRow = ({ cabin }) => {
  return (
    <tr>
      <th>{cabin[0]}</th>
      <td>{cabin[1]}</td>
      <td>{cabin[2]}</td>
      <td>{cabin[3]}</td>
      <td>{cabin[4]}</td>
    </tr>
  );
};

export default CabinRow;
