import React, { useEffect, useState } from "react";
import AnimalRow from "./AnimalRow";

const Animal = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/query")
      .then((res) => res.json())
      .then((datam) => {
        setAnimals(datam);
      });
  }, []);
  return (
    <div className="pt-40 pb-56">
      <div className="overflow-x-auto">
        <h1 className="font-semibold text-2xl text-pink-400">
          Total Animals: {animals.length}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>admin_id</th>
              <td>name</td>
              <td>email</td>
              <td>gender</td>
              <td>city</td>
              <td>street</td>
              <td>house</td>
              <td>dob</td>
              <td>salary</td>
              <td>designation</td>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal) => (
              <AnimalRow key={animal.admin_id} animal={animal}></AnimalRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Animal;
