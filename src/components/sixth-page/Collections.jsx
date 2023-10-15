import React from "react";
import "./Collections.css";
import hisbiscus from '../assets/cards-img/Rectangle 61.png'
import chima from '../assets/cards-img/Rectangle 34.png'
import Janet from '../assets/cards-img/Rectangle 43.png'

const Collections = () => {
  return (
    <>
      <div className="top">
        <p>Top Collections</p>
      </div>
      <div className="top-collections">
            <div className="cardz">
                <div className="big-card"></div>
                <div className="small-cards">
                    <div className="small-card1"></div>
                    <div className="small-card2"></div>
                    <div className="small-card3"></div>
                </div>
                <div className="purple">
                    <div className="topic">
                    <p>Purple Hisbiscus</p>
                    </div>
                    <div className="hisbiscus-img">
                        <div className="adiche"><img src={hisbiscus} alt="hisbiscus" /></div>
                        <div className="amanda"><p>By Chimamanda Adiche</p></div>
                    </div>
                </div>
            </div>
            <div className="cardz">
             <div className="big-card"></div>
            <div className="small-cards">
                <div className="small-card1"></div>
                <div className="small-card2"></div>
                <div className="small-card3"></div>
            </div>
            <div className="purple">
                    <div className="topic">
                    <p>Cyan Hisbiscus</p>
                    </div>
                    <div className="hisbiscus-img">
                        <div className="adiche"><img src={chima} alt="hisbiscus" /></div>
                        <div className="amanda"><p>By Alex Chima Ogbanje</p></div>
                    </div>
                </div>
            </div>
            <div className="cardz">
             <div className="big-card"></div>
            <div className="small-cards">
                <div className="small-card1"></div>
                <div className="small-card2"></div>
                <div className="small-card3"></div>
            </div>
            <div className="purple">
                    <div className="topic">
                    <p>Rolling Stone</p>
                    </div>
                    <div className="hisbiscus-img">
                        <div className="adiche"><img src={Janet} alt="hisbiscus" /></div>
                        <div className="amanda"><p>By Janet Effiong Dekono</p></div>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Collections;
