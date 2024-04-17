import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";

import "./Laurels.css";

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => {
          const { imgUrl, title, subtitle } = award;

          return (
            <div key={index + title} className="app__laurels_awards-card">
              <img src={imgUrl} alt="awards" />
              <div className="app__laurels_awards-card_content">
                <p className="P__cormorant" style={{ color: "#dcca87" }}>
                  {title}
                </p>
                <p className="p__opensans">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
