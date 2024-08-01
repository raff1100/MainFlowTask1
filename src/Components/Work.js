import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Coffee",
      text: "Select your favorite coffee blend for a perfectly brewed experience delivered right to your door.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize how often you receive your coffee, ensuring a steady supply of your favorite brew.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy prompt deliveries that bring your freshly brewed coffee straight to your door.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Simply choose your preferred coffee, and we'll take care of grinding and brewing to perfection. Your fresh, ready-to-enjoy coffee will be delivered straight to you
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
