import React from "react";

import Navbar from "./navbar";
import HeroSection from "./heroSection";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="constraint">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Header;
