import React, { useEffect, useState } from "react";
import CustomerRow from "./CustomerRow";
import CustomerInsert from "./CustomerInsert";
import CustomerDelete from "./CustomerDelete";
import CustomerUpdate from "./CustomerUpdate";
import CustomerBanner from "./CustomerBanner";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  let [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/customer")
      .then((res) => res.json())
      .then((datam) => {
        console.log(searchText);
        setCustomers(datam);
        const match = datam.filter(
          (d) => d.email && d.email.includes(searchText)
        );
        setSearchResult(match);
      });
  }, [searchText]);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };

  return (
    <div>
      <CustomerBanner></CustomerBanner>
      <div>
        <input
          onChange={handleSearchChange}
          type="text"
          className="border-2"
          placeholder="Search customer"
        ></input>
      </div>
      <div className="pt-20 pb-56 pl-0">
        <div className="overflow-x-auto">
          <h1 className="font-semibold text-2xl pb-7 text-blue-700">
            Total customers: {customers.length}
            <br />
            Total searched customers: {searchResult.length}
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
                  Home
                </td>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <CustomerRow
                  key={customer.customer_id}
                  customer={customer}
                ></CustomerRow>
              ))}
            </tbody>
            <tbody>
              {searchResult.map((customer) => (
                <CustomerRow
                  key={customer.customer_id}
                  customer={customer}
                ></CustomerRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex pt-20 px-20 gap-32">
        <CustomerDelete></CustomerDelete>
        <CustomerUpdate></CustomerUpdate>
      </div>
    </div>
  );
};

export default Customer;
