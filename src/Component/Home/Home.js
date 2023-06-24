import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import FaqSection from "./FaqSection";
import CardComponent from "./CardComponent";

const Home = () => {
  return (
    <div className="pb-40">
      <Banner></Banner>
      <CardComponent></CardComponent>
      <Services></Services>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
