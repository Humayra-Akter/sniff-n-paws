import React from "react";
import img from "../../assets/images/Fosterpet.png";

const FaqSection = () => {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-center text-5xl text-blue-700 uppercase">
          Frequently asked Question
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <div className="mt-5 mb-5 ms-4 pt-16">
          <div className="collapse collapse-arrow text-blue-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-blue-100">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow text-blue-50">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
