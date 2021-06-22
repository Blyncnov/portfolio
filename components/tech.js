import React from "react";

const Tech = () => {
  return (
    <>
      <div className="constraint">
        <div className="service__container ">
          <div className="service__columns">
            <div className="service__text">
              <h3 className="service__title">Some Technologies i use.</h3>
              <p className="service__tagline">
                Our teams continually develop different types of web
                applications and products.
              </p>
            </div>
            <div className="tech__container ">
              <div className="tech__inner ">
                <div className="inner__show"></div>
              </div>
              <div className="tech__inner">
                <div className="inner__show green"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Tech;
