import React from "react";
import Image from "next/image";

import profilePic from "../public/jeremy.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero__banner">
        <div className="hero__container">
          <div className="hero__row">
            <div className="hero__text">
              <h2 className="hero__name">Hi, IM JEREMY</h2>
              <h4 className="hero__job">Front-End Developer</h4>
              <p className="hero__say">
                Hey, there!, im Jeremy, a web developer and a UX designer. i was
                born and raised in Nigeria. I design and code beautifully simple
                things, and I love what I do. Through constant practice &
                learning, and I produce aesthetic software to an extremely high
                standard.
              </p>
              <button>Hire Me</button>
            </div>
          </div>
          <div className="hero__row banner__image">
            <Image className="banner__img" src={profilePic} alt="jeremy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
