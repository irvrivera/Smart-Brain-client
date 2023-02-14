import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./Brain.png";
import "./Logo.css";

const Logo = () => (
  <div className="ma5 mt0 w6.5">
    <Tilt style={{ display: "flex", width: 150 }}>
      <div className="Tilt-inner">
        <img style={{ height: 100, width: 100 }} alt="logo" src={Brain} />
      </div>
    </Tilt>
  </div>
);
export default Logo;
