import React from "react";
import img1 from "../../assets/images/humayra.jpg";
import img2 from "../../assets/images/abrar.jpg";
import img3 from "../../assets/images/imran.jpg";
import img4 from "../../assets/images/sadiq.jpg";
import img5 from "../../assets/images/call.png";
import img6 from "../../assets/images/address.png";
import img7 from "../../assets/images/facebook-app-symbol.png";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase p-10 font-bold text-3xl text-blue-700 text-center">
          group members
        </h1>
      </div>
      <div className="flex p-4 pt-12 space-x-4">
        <div class="card w-96 text-blue-100 shadow-xl">
          <figure>
            <img src={img1} className="w-80 h-48" />
          </figure>
          <div class="card-body">
            <p className="text-center font-extrabold text-sm">Humayra Akter</p>
            <p className="flex">
              <img src={img5} className="w-4 h-4" />
              <h1 className="pl-5">01234567890</h1>
            </p>
            <p className="flex">
              <img src={img6} className="w-4 h-4" />
              <h1 className="pl-5">Dhaka</h1>
            </p>
            <p className="flex">
              <img src={img7} className="w-4 h-4" />
              <h1 className="pl-5">https://humayraakter.com</h1>
            </p>
          </div>
        </div>
        <div class="card w-96 text-blue-100 shadow-xl">
          <figure>
            <img src={img2} className="w-80 h-48" />
          </figure>
          <div class="card-body">
            <p className="text-center font-extrabold text-sm">Humayra Akter</p>
            <p className="flex">
              <img src={img5} className="w-4 h-4" />
              <h1 className="pl-5">01234567890</h1>
            </p>
            <p className="flex">
              <img src={img6} className="w-4 h-4" />
              <h1 className="pl-5">Dhaka</h1>
            </p>
            <p className="flex">
              <img src={img7} className="w-4 h-4" />
              <h1 className="pl-5">https://humayraakter.com</h1>
            </p>
          </div>
        </div>
        <div class="card w-96 text-blue-100 shadow-xl">
          <figure>
            <img src={img3} className="w-80 h-48" />
          </figure>
          <div class="card-body">
            <p className="text-center font-extrabold text-sm">Humayra Akter</p>
            <p className="flex">
              <img src={img5} className="w-4 h-4" />
              <h1 className="pl-5">01234567890</h1>
            </p>
            <p className="flex">
              <img src={img6} className="w-4 h-4" />
              <h1 className="pl-5">Dhaka</h1>
            </p>
            <p className="flex">
              <img src={img7} className="w-4 h-4" />
              <h1 className="pl-5">https://humayraakter.com</h1>
            </p>
          </div>
        </div>
        <div class="card w-96 text-blue-100 shadow-xl">
          <figure>
            <img src={img4} className="w-80 h-48" />
          </figure>
          <div class="card-body">
            <p className="text-center font-extrabold text-sm">Humayra Akter</p>
            <p className="flex">
              <img src={img5} className="w-4 h-4" />
              <h1 className="pl-5">01234567890</h1>
            </p>
            <p className="flex">
              <img src={img6} className="w-4 h-4" />
              <h1 className="pl-5">Dhaka</h1>
            </p>
            <p className="flex">
              <img src={img7} className="w-4 h-4" />
              <h1 className="pl-5">https://humayraakter.com</h1>
            </p>
          </div>
        </div>
        <div class="card w-96 text-blue-100 shadow-xl">
          <figure>
            <img src={img1} className="w-80 h-48" />
          </figure>
          <div class="card-body">
            <p className="text-center font-extrabold text-sm">Humayra Akter</p>
            <p className="flex">
              <img src={img5} className="w-4 h-4" />
              <h1 className="pl-5">01234567890</h1>
            </p>
            <p className="flex">
              <img src={img6} className="w-4 h-4" />
              <h1 className="pl-5">Dhaka</h1>
            </p>
            <p className="flex">
              <img src={img7} className="w-4 h-4" />
              <h1 className="pl-5">https://humayraakter.com</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
