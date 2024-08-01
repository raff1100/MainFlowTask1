import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Coffee Is An Important Part Of A Balanced Day
        </h1>
        <p className="primary-text">
        Experience the perfect cup of coffee with every sip. Our expertly crafted blends bring you rich, full flavors and unparalleled freshness, making each moment a delightful indulgence. Enjoy the exceptional quality and taste that only our coffee can deliver
        </p>
        <p className="primary-text">
        Select your favorite coffee blend, and our experts will handle the preparation and brewing. Enjoy fresh, expertly crafted coffee delivered right to your door..
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
