import React from "react";
import "./NovelSpheres.css";
import bird from '../assets/novel-img/Group 162.png'
import duck from '../assets/novel-img/Group 168.png'
import flame from '../assets/novelSphere-img/Group 182.png'
import coin from '../assets/novelSphere-img/Group 183.png'
import backtxt from '../assets/novel-img/Group 164.png'
import beauty from '../assets/novel-img/Group 163.png'

const NovelSpheres = () => {
  return (
    <>
      <div className="spheres">
        <div className="head-txt">
          <div className="library">
            <p>Explore Library</p>
          </div>
          <div className="loremT-txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
              vulputate laoreet ullamcorper erat amet, velit.{" "}
            </p>
          </div>
        </div>
        <div className="buttons">
            <button className="action">Action</button>
            <button className="more">Adventure</button>
            <button className="more">Comedy</button>
            <button className="more">Crime $ Mystery</button>
            <button className="more">Fantasy</button>
            <button className="more">Historical</button>
            <button className="more">Honour</button>
            <button className="more">Romance</button>
            <button className="more">More</button>
        </div>
        <div className="sphere-cards">
            <div><img src={bird} alt="bird" /></div>
            <div><img src={duck} alt="duck" /></div>
            <div><img src={flame} alt="flame" /></div>
            <div><img src={coin} alt="coins" /></div>
            <div><img src={backtxt} alt="backtxt" /></div>
            <div><img src={beauty} alt="fantasy" /></div>
            <div><img src={bird} alt="" /></div>
            <div><img src={bird} alt="" /></div>
            <div><img src={bird} alt="" /></div>
            <div><img src={bird} alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default NovelSpheres;
