import React from "react";
import Image from "next/image";

import profilePic from "../public/head.svg";
import Infomation from "../data/info";

const HeroSection = () => {
  return (
    <>
      <div className="hero__banner">
        <div className="hero__container">
          <div className="hero__row">
            <div className="hero__text">
              <h2 className="hero__name">{Infomation.id}</h2>
              <h4 className="hero__job">{Infomation.job}</h4>
              <p className="hero__say">{Infomation.desc}</p>
              <button>{Infomation.button}</button>
            </div>
          </div>
          <div className="hero__row banner__image hide_image">
            <Image
              id="slide"
              className="banner__img"
              src={profilePic}
              alt="jeremy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
