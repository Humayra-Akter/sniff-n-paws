import React from "react";
import FeedbackAdd from "./FeedbackAdd";
import FeedbackCard from "./FeedbackCard";

const FeedbackGeneral = () => {
  return (
    <div>
      <div className="text-center pt-24">
        <h3 className="text-blue-800 uppercase font-black text-2xl">
          OUR feedbacks
        </h3>
      </div>
      <div className="grid grid-cols-3">
        <FeedbackCard></FeedbackCard>
        <FeedbackCard></FeedbackCard>
        <FeedbackAdd></FeedbackAdd>
      </div>
    </div>
  );
};

export default FeedbackGeneral;
