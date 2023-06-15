import React from "react";
import img1 from "../../assets/images/kitty-g3d21a21e7_1280.png";
import img2 from "../../assets/images/dog-g2a11e8ca4_1280-removebg-preview.png";
import img3 from "../../assets/images/bunny-g5c4a5df10_1280-removebg-preview.png";

const Services = () => {
  return (
    <div className="pt-32">
      <h1 className="font-extrabold text-center text-5xl text-blue-700 uppercase">
        Our Services
      </h1>
      <div className="flex p-28 space-x-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Services;
