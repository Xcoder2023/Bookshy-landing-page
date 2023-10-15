import React from "react";
import "./Part.css";
import binance from "../../assets/part-img/Binance logo.svg";
import bitcoin from "../../assets/part-img/Bitcoin logo.svg";
import ethereum from "../../assets/part-img/Ethereum logo.svg";
import group from "../../assets/part-img/Group 105.svg";
import shiba from "../../assets/part-img/shiba-inu-shib-logo logo.svg";
import usdt from "../../assets/part-img/usdt logo.svg";
import apple from "../../assets/part-img/bi_apple.svg";
import android from "../../assets/part-img/logos_google-play-icon.svg";
import Sphere from "../box2/Sphere";

const Part = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }} className="container">
      <div className="section-a">
        <div className="svg">
          <div className="bold-print">
            <h2>
              Experience The Real <span>Happiness</span> Books Bring!
            </h2>
          </div>
          <div className="bold-print-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="43"
              viewBox="0 0 139 43"
              fill="none"
            >
              <path d="M0 0H139L129.227 21.5L139 43H0V21.5V0Z" fill="#B0B0F8" />
            </svg>
          </div>
        </div>
        <div className="print-paragraph">
          <p>
            The copywriters that will work on this project are still on their
            leave, i’m just doing my own little bit here but we shouldn’t do
            more than 2-3 lines here
          </p>
        </div>
        <div className="btn-print">
          <button className="print-btn">Join the community</button>
        </div>
        <div className="media-suport">
          <div className="suport-team">
            <p>Supported by</p>
          </div>
          <ul className="media-handle">
            <li>
              <img src={bitcoin} alt="bitcoin" />
            </li>
            <li>
              <img src={ethereum} alt="ethereum" />
            </li>
            <li>
              <img src={group} alt="group-105" />
            </li>
            <li>
              <img src={shiba} alt="shiba" />
            </li>
            <li>
              <img src={usdt} alt="usdt" />
            </li>
            <li>
              <img src={binance} alt="binance" />
            </li>
          </ul>
        </div>
        <div className="get-on-tele">
          <button className="phone1"><img src={apple} alt="bi-apple" /> Get on Iphone</button>
          <button className="phone2"><img src={android} alt="google-logo" /> Get on Android</button>
        </div>
      </div>
      <Sphere />
    </div>
  );
};

export default Part;
