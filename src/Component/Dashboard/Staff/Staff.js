import React, { useEffect, useState } from "react";
import StaffRow from "./StaffRow";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/staff")
      .then((res) => res.json())
      .then((datam) => {
        setStaffs(datam);
      });
  }, []);

  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Staffs: {staffs.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-left">
                  customer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-left">
                  name
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  email
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  gender
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Address
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Date of birth
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Age
                </td>
                <td className="uppercase text-xs font-extrabold text-left">
                  Designation
                </td>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staff) => (
                <StaffRow key={staff.staff_id} staff={staff}></StaffRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff;
