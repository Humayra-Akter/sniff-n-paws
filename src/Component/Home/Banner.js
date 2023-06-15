import React from "react";
import img from "../../assets/images/pets-g1111451cc_1280.jpg";

const Banner = () => {
  return (
    <div>
      <h1
        style={{
          background: `url(${img})`,
        }}
        className="w-full h-full font-extrabold text-center text-5xl bg-blue-50"
      >
        SNIFF-N-PAWS
      </h1>
      <img className="w-full" src={img}></img>
    </div>
  );
};

export default Banner;
