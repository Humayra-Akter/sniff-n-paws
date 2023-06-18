import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import FaqSection from "./FaqSection";
import FeedbackAdd from "../Feedback/FeedbackAdd";
import Donation from "../Donation/Donation";
import DonationAdd from "../Donation/DonationAdd";

const Home = () => {
  return (
    <div className="pb-40">
      <Banner></Banner>
      <div className="flex">
        <DonationAdd></DonationAdd>
        <FeedbackAdd></FeedbackAdd>
      </div>
      <Services></Services>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
