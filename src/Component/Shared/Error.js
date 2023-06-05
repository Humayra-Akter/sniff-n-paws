import React from "react";
import img from "../../assets/images/cat_stretching_dont_go_404.png";

const Error = () => {
  return (
    <div className="pt-24">
      <h1 className="w-full h-full font-extrabold text-center text-5xl text-pink-400">
        SORRY YOU ENTERED A WRONG URL
      </h1>
      <img className="mx-auto pt-10" src={img} />
    </div>
  );
};

export default Error;
