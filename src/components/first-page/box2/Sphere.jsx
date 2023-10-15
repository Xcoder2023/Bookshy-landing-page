import React from "react";
import "./Sphere.css";
import card from "../../assets/part-img/Group 151.png";
import box from "../../assets/part-img/Group 26.png";

const Sphere = () => {
  return (
    <>
      <div>
        <div className="box2">
          <div className="cards">
            <img src={card} alt="group-26" />
          </div>
          <div className="card2">
            <img src={box} alt="group-151" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sphere;
