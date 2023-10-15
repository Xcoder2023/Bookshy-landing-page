import React from "react";
import "./MarketPlace.css";
import ayamatanga from "../assets/NFT-img/Frame 172.png";
import ayajuraya from "../assets/NFT-img/Frame 181.png";
import azaturaya from "../assets/NFT-img/Frame 182.png";
import uyamoja from "../assets/NFT-img/Frame 183.png";
import boxer from "../assets/NFT-img/Frame 172 (1).png";
import bouncer from "../assets/NFT-img/Frame 181 (1).png";
import banger from "../assets/NFT-img/Frame 182 (1).png";
import ponch from "../assets/NFT-img/Frame 183 (1).png";

const MarketPlace = () => {
  return (
    <>
      <div className="NFT-market-place">
        <div className="NFT-head-txt">
          <div className="NFT">
            <p>NFT Marketplace</p>
          </div>
          <div className="loremN-txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
              vulputate laoreet ullamcorper erat amet, velit.{" "}
            </p>
          </div>
        </div>
        <div className="NFT-buttons">
          <button className="N-btn">Action</button>
          <button className="comedy">Adventure</button>
          <button className="comedy">Comedy</button>
          <button className="comedy">Crime $ Mystery</button>
          <button className="comedy">Fantasy</button>
          <button className="comedy">Historical</button>
          <button className="comedy">Horror</button>
          <button className="comedy">Romance</button>
          <button className="comedy">More</button>
        </div>
        <div className="NFT-cards">
          <div className="card1">
            <img src={ayamatanga} alt="ayamatanga" />
          </div>
          <div className="card1">
            <img src={ayajuraya} alt="ayajuraya" />
          </div>
          <div className="card1">
            <img src={azaturaya} alt="azaturaya" />
          </div>
          <div className="card1">
            <img src={uyamoja} alt="NFT-cards" />
          </div>
          <div className="card1">
            <img src={boxer} alt="boxer" />
          </div>
          <div className="card1">
            <img src={bouncer} alt="bouncer" />
          </div>
          <div className="card1">
            <img src={banger} alt="banger" />
          </div>
          <div className="card1">
            <img src={ponch} alt="ponch" />
          </div>
        </div>
        <div className="NFT-bottom-btn">
          <button className="load">Load more</button>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
