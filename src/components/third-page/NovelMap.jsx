import React from "react";
import "./NovelMap.css";

const NovelMap = () => {
  return (
    <>
      <div className="collectors">
        <div className="bold-text">
          <p>
            We are the best collectors of <span>Novel maps</span>
          </p>
        </div>
        <div className="lorem-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
            vulputate laoreet ullamcorper erat amet, velit. Venenatis molestie
            convallis commodo facilisi. Tortor aliquet vestibulum{" "}
          </p>
          <span>Find Collection</span>
        </div>
      </div>
      <div className="map-grids">
            <div className="grid-view">
                <div className="grid-one"></div>
                <div className="grid-two"></div>
                <div className="grid-three"></div>
                <div className="grid-four"></div>
                <div className="grid-oneB"></div>
                <div className="grid-six"></div>
            </div>
            <div className="left-large-view"></div>
      </div>
    </>
  );
};

export default NovelMap;
