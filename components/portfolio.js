import React from "react";

const Portfolio = () => {
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
              <div className="service__tag full">
                <div className="service__color portfolio"></div>
                <h4>Web Development</h4>
                <br />
                <h6>
                  <a href="">view more...</a>
                </h6>
              </div>
              <div className="service__tag full">
                <div className="service__color green portfolio"></div>
                <h4>Content Writing </h4>
                <br />
                <h6>
                  <a href="">view more...</a>
                </h6>
              </div>
              <div className="service__tag full">
                <div className="service__color purple portfolio"></div>
                <h4>UI / UX Design</h4>
                <br />
                <h6>
                  <a href="">view more...</a>
                </h6>
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

export default Portfolio;
