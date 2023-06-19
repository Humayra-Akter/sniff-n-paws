import React from "react";
import DonationAdd from "./DonationAdd";
import DonateHistory from "./DonateHistory";

const Donate = () => {
  return (
    <div className="grid grid-cols-2">
      <DonateHistory></DonateHistory>
      <DonationAdd></DonationAdd>
    </div>
  );
};

export default Donate;
