import React from "react";
import Image from "next/image";
import Work from "../data/works";

const Portfolio = ({ img }) => {
  return (
    <>
      <div className="constraint">
        <div id="portfolio" className="service__container transparent">
          <div className="service__columns">
            <div className="service__text">
              <h3 className="service__title">Take a look some of my work.</h3>
              <p className="service__tagline">
                Our teams continually develop different types of web
                applications and products.
              </p>
            </div>
            <div className="service__content ">
              {Work.map((works) => {
                return (
                  <>
                    <div key={works.id}>
                      <div className="service__tag full shadow">
                        <div className="service__color portfolio">
                          <img src={works.img} alt="Picture of the author" />
                        </div>
                        <h4 className="service__h4">{works.title}</h4>
                        <h6>
                          <a href={works.link}>Preview Link</a>
                        </h6>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace" />
    </>
  );
};

export default Portfolio;
