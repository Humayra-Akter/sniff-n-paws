import React from "react";
import VetUpdateHealthRecord from "./VetUpdateHealthRecord";
import VetHealthRecordView from "./VetHealthRecordView";

const DashboardVet = () => {
  return (
    <div className="flex">
      <VetHealthRecordView></VetHealthRecordView>
      <VetUpdateHealthRecord></VetUpdateHealthRecord>
    </div>
  );
};

export default DashboardVet;
