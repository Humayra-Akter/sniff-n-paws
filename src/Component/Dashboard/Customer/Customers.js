import React from "react";
import Customer from "./Customer";
import CustomerPricing from "./CustomerPricing";
import CustomerTotalDatcareServices from "./CustomerTotalDatcareServices";
import CustomerAnimalCabin from "./CustomerAnimalCabin";

const Customers = () => {
  return (
    
    <div>
      <Customer></Customer>
      <div id="pricing">
        <CustomerPricing></CustomerPricing>
      </div>
      <CustomerTotalDatcareServices></CustomerTotalDatcareServices>
      <CustomerAnimalCabin></CustomerAnimalCabin>
    </div>
  );
};

export default Customers;
