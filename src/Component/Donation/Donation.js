import React from "react";
import DonationCustomer from "./DonationCustomer";
import DonationNonCustomer from "./DonationNonCustomer";

const Donation = () => {
  return (
    <div>
      <DonationCustomer></DonationCustomer>
      <DonationNonCustomer></DonationNonCustomer>
    </div>
  );
};

export default Donation;
