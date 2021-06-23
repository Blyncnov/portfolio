import React from "react";
import Service from "../data/service";

const Services = () => {
  return (
    <>
      <div className="constraint">
        <div id="work" className="service__container">
          <div className="service__column">
            <div className="service__text">
              <h3 className="service__title">Take a look some of what I do.</h3>
              <p className="service__tagline">
                Our teams continually develop different types of web
                applications and products.
              </p>
            </div>
            <div className="service__content">
              {Service.map((services) => {
                return (
                  <>
                    <div key={services.id} className="service__tag ">
                      <div className="service__color {services.color} "></div>
                      <h4>{services.title}</h4>
                      <p className="service__tagline__title">{services.desc}</p>
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

export default Services;

{
  /* <div className="service__tag">
                <div className="service__color green"></div>
                <h4>Content Writing </h4>
                <p className="service__tagline__title">
                  Favourite tolerably engrossed. Truth short folly court why she
                  their balls Excellence super power.
                </p>
              </div>
              <div className="service__tag">
                <div className="service__color purple"></div>
                <h4>UI / UX Design</h4>
                <p className="service__tagline__title">
                  Favourite tolerably engrossed. Truth short folly court why she
                  their balls Excellence super power.
                </p>
              </div> */
}
