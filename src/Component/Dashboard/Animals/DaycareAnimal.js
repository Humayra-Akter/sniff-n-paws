import React, { useEffect, useState } from "react";
import DaycareAnimalRow from "./DaycareAnimalRow";

const DaycareAnimal = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/admin")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div>
      <div className="pt-40 pb-56">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl text-pink-400">
            Total Animals: {animals.length}
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
    </div>
  );
};

export default DaycareAnimal;
