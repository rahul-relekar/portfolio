import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>RAHUL RELEKAR</h1>
      <p> 拉胡尔·雷卡 | राहुल रेलेकर | ರಾಹುಲ್ ರೆಲೆಕರ್</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Personal
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Professional
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
