import React from "react";
import "./trending.scss";
import MainBox from "./resusableCompo/mainBox";
function Trending() {
  return (
    <div className="trending">
      <div className="back-text">
        <img src={require("../../assets/TrendingNow.svg")} alt=" "></img>
      </div>
      <MainBox />
    </div>
  );
}
export default Trending;
