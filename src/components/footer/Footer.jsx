import React from "react";
import "./Footer.css";
import logo from "../assets/footer-media/logo gradient 1.png";
import instagram from "../assets/footer-media/Group 209.png";
import linkedIn from "../assets/footer-media/Group 205 (1).png";
import mini from "../assets/footer-media/Group 206 (1).png";
import facebook from "../assets/footer-media/Group 207.png";
import twitter from "../assets/footer-media/Group 208.png";
import braze from "../assets/footer-media/Group 201.png";

const Footer = () => {
  return (
    <>
      <div className="footer-range">
        <div className="general-div">
          <div className="housing-div">
            <div className="footer-logos">
              <img src={logo} alt="logo" />
              <p>BOOKSHY</p>
            </div>
            <div className="text-lorem">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur consequat, et pharetra porta sed nibh. Nisi leo
                arcu, orci in at elit integer. Ultrices pharetra, nulla mauris
                pellentesque vestibulum suscipit. Blandit rhoncus quam amet,
                nibh.
              </p>
            </div>
            <div className="social-media-handles">
              <ul>
                <li>
                  <img src={instagram} alt="" />
                </li>
                <li>
                  <img src={linkedIn} alt="" />
                </li>
                <li>
                  <img src={mini} alt="mini-logo" />
                </li>
                <li>
                  <img src={facebook} alt="fb-logo" />
                </li>
                <li>
                  <img src={twitter} alt="X-logo" />
                </li>
                <li>
                  <img src={braze} alt="braz-logo" />
                </li>
              </ul>
            </div>
          </div>
          <div className="summary">
            <div className="mktplace">
              <h3>Marketplace</h3>
              <ul className="contacts">
                <li>All Novels</li>
                <li>All NFTS</li>
                <li>Collections</li>
                <li>Maps</li>
              </ul>
            </div>
            <div className="resourse">
              <h3>Resources</h3>
              <ul className="contacts">
                <li>Help Centers</li>
                <li>Partners</li>
                <li>Docs</li>
              </ul>
            </div>
            <div className="company">
              <h3>Company</h3>
              <ul className="contacts">
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="statistics">
              <h3>Statistics</h3>
              <ul className="contacts">
                <li>Ranking</li>
                <li>Activities</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="copywrite">
          <div className="bookshy">
            <p>&copy;BOOKSHY. All right reserved</p>
          </div>
          <div className="terms">
            <ul>
                <li>Terms</li>
                <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
