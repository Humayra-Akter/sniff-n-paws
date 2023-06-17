import React from "react";
import img from "../../assets/images/pets-g1111451cc_1280-removebg-preview.png";

const Banner = () => {
  return (
    <div>
      <h1 className="w-full h-full text-blue-800 pt-10 font-serif font-extrabold text-center text-5xl bg-blue-50">
        SNIFF-N-PAWS
      </h1>
      <img className="w-full bg-blue-50" src={img}></img>
    </div>
  );
};

export default Banner;
