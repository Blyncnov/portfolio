import React from "react";
import Technologies from "../data/techs";

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
              <div className="tech__inner shadow">
                <div className="inner__show transparent scroll">
                  {Technologies.map((tech) => {
                    return (
                      <>
                        <div className="tech__percentage">
                          <div className="basis">
                            <h4>{tech.tech} </h4>
                          </div>
                          <div className="tech__fill"></div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace" />
    </>
  );
};

export default Tech;
