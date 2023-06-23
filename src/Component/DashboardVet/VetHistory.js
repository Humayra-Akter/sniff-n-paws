import React from "react";
import VetHealthRecordView from "./VetHealthRecordView";
import VetUpdateHealthRecord from "./VetUpdateHealthRecord";

const VetHistory = () => {
  return (
    <div className="flex gap-40">
      <VetHealthRecordView></VetHealthRecordView>
      <VetUpdateHealthRecord></VetUpdateHealthRecord>
    </div>
  );
};

export default VetHistory;
