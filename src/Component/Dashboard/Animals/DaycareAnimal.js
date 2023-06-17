import React, { useEffect, useState } from "react";
import DaycareAnimalRow from "./DaycareAnimalRow";
import UnvaccinattedDaycare from "./UnvaccinattedDaycare";
import HealthyDaycare from "./HealthyDaycare";
import IsolatedDaycare from "./IsolatedDaycare";
import DaycareInsert from "./DaycareInsert";

const DaycareAnimal = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/day_care_animal")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-40 pb-40">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-blue-700">
            Total Daycare Animals: {animals.length}
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>index</th>
                <td>AGE</td>
                <td>BREED</td>
                <td>WEIGHT</td>
                <td>RATE</td>
                <td>TYPE</td>
                <td>COMING_DATE</td>
                <td>RELEASE_DATE</td>
                <td>customer_id</td>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <DaycareAnimalRow
                  key={animal.index}
                  animal={animal}
                ></DaycareAnimalRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DaycareInsert></DaycareInsert>
      <HealthyDaycare></HealthyDaycare>
      <IsolatedDaycare></IsolatedDaycare>
      <UnvaccinattedDaycare></UnvaccinattedDaycare>
    </div>
  );
};

export default DaycareAnimal;
