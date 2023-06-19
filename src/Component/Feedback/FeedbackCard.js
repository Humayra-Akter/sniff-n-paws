import React, { useEffect, useState } from "react";
import FeedbackCardsss from "./FeedbackCardsss";

const FeedbackCard = () => {
  const [feedbacks, setfeedbacks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/feedback")
      .then((res) => res.json())
      .then((datam) => {
        setfeedbacks(datam);
      });
  }, []);
  return (
    <div>
      <div className="my-12">
        <div className="grid grid-cols-1 px-20 pt-20 gap-10">
          {feedbacks.map((feedback) => (
            <FeedbackCardsss
              key={feedback.feedback_id}
              feedback={feedback}
            ></FeedbackCardsss>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
