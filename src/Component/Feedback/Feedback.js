/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import FeedbackPrev from "./FeedbackPrev";
import FeedbackAdd from "./FeedbackAdd";

const Feedback = () => {
  return (
    <div>
      <FeedbackPrev></FeedbackPrev>
      <FeedbackAdd></FeedbackAdd>
    </div>
  );
};

export default Feedback;
