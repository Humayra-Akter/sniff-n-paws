import React from "react";
import img from "../../assets/images/furryghor.png";

const About = () => {
  return (
    <div className="pt-28 pb-48">
      <img className="mx-auto" src={img} alt="" />
      <h4 className="mt-4 p-8  w-full h-full font-extrabold text-center text-4xl text-pink-400">
        About us
      </h4>
      <p className="mt-4 pt-2 ms-2 me-2 p-7 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt
        suscipit justo ac suscipit. Donec interdum facilisis maximus. Vestibulum
        non turpis sagittis, laoreet mauris in, ullamcorper est. Praesent ut
        euismod libero. Fusce quis lobortis urna, condimentum pellentesque ante.
        Mauris massa tellus, sagittis sed aliquam non, aliquet eu dui. Aliquam
        sit amet posuere diam. In tempus est auctor quam maximus porttitor.
        Vestibulum laoreet condimentum purus, quis dignissim libero blandit et.
        Fusce congue pharetra mauris, id sollicitudin leo sagittis sit amet.
        Suspendisse luctus arcu vel nisi tincidunt facilisis. Nam dui magna,
        auctor id est sit amet, pellentesque commodo purus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aenean auctor leo placerat nisi commodo egestas. Etiam posuere,
        mi in convallis maximus, erat erat aliquam urna, eget semper nunc nisl
        vitae ex. Vivamus suscipit aliquam libero, in condimentum lorem
        efficitur eget. Morbi porta tristique purus vel maximus. Ut ultricies
        eros eget dapibus venenatis.
      </p>
    </div>
  );
};

export default About;
