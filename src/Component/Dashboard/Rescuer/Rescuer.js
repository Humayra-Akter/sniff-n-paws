import React, { useEffect, useState } from "react";
import RescuerRow from "./RescuerRow";

const Rescuer = () => {
  const [vets, setVets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/rescuer")
      .then((res) => res.json())
      .then((datam) => {
        setVets(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total Rescuer: {vets.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th className="uppercase text-xs font-extrabold text-center">
                  Rescuer_id
                </th>
                <td className="uppercase text-xs font-extrabold text-center">
                  Rescuer_name
                </td>
                <td className="uppercase text-xs font-extrabold text-center">
                  Rescuer_phone
                </td>
              </tr>
            </thead>
            <tbody>
              {vets.map((vet) => (
                <RescuerRow key={vet.vet_id} vet={vet}></RescuerRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rescuer;
