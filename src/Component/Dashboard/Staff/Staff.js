import React, { useEffect, useState } from "react";
import StaffRow from "./StaffRow";
import StaffInsert from "./StaffInsert";
import StaffDelete from "./StaffDelete";
import StaffUpdate from "./StaffUpdate";
import StaffSpecialization from "./StaffSpecialization";

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
      <StaffSpecialization></StaffSpecialization>
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
                    staff_id
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
                    Salary
                  </td>
                  <td className="uppercase text-xs font-extrabold text-left">
                    Phone
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
          <div className="flex pt-20">
            <StaffInsert></StaffInsert>
            <div className="pl-20">
              <StaffDelete></StaffDelete>
              <StaffUpdate></StaffUpdate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
