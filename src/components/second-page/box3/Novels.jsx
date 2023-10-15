import React from "react";
import "./Novels.css";
import novel1 from '../../assets/novel-img/Group 161.png'
import novel2 from '../../assets/novel-img/Group 162.png'
import novel3 from '../../assets/novel-img/Group 163.png'
import novel4 from '../../assets/novel-img/Group 164.png'
import novel5 from '../../assets/novel-img/Group 168.png'

const Novels = () => {
  return (
    <div className="trending-novels">
      <p>Trending Novels for you</p>
      <div className="novels">
        <img className="nove-img" src={novel1} alt="novel-1" />
        <img className="nove-img" src={novel2} alt="novel-2" />
        <img className="nove-img" src={novel3} alt="novel-3" />
        <img className="nove-img" src={novel4} alt="novel-4" />
        <img className="novel5" src={novel5} alt="novel-5" />
      </div>
    </div>
  );
};

export default Novels;
