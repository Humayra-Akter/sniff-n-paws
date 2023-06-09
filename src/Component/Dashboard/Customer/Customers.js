import React from "react";
import Customer from "./Customer";
import CustomerPricing from "./CustomerPricing";
import CustomerTotalDatcareServices from "./CustomerTotalDatcareServices";
import CustomerAnimalCabin from "./CustomerAnimalCabin";

const Customers = () => {
  return (
    <div>
      <Customer></Customer>
      <CustomerPricing></CustomerPricing>
      <CustomerTotalDatcareServices></CustomerTotalDatcareServices>
      <CustomerAnimalCabin></CustomerAnimalCabin>
    </div>
  );
};

export default Customers;
