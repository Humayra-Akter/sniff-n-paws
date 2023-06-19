import React from "react";
import { Link } from "react-router-dom";

const FeedbackCardsss = ({ feedback }) => {
  const { _id, name, description, img } = feedback;
  return (
    <div>
      <div class="card w-96 bg-blue-50">
        <div class="hero-content card-body items-center text-center flex-col lg:flex-row">
          <img
            height={116}
            width={115}
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
          <div>
            <h2 className="card-title text-base font-extrabold text-blue-700">
              {name}
            </h2>
            <p className="text-justify">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              {/* <button className="btn btn-sm bg-blue-100 max-w-xs btn-outline font-semibold text-blue-700">
                <Link className="text-blue-700" to="/login">
                  adopt
                </Link>
              </button> */}
              {/* <button className="btn btn-sm bg-blue-100 max-w-xs btn-outline font-semibold text-blue-700">
                <Link className="text-blue-700" to="/donation">
                  donate
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCardsss;
