import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function HeroSection() {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      width: "28rem",
      marginBottom: "-40rem",
      color: "white",
      backgroundColor: "transparent",
      // borderColor:"transparent",
      borderTop: "4px solid #39FF14",
      fontSize: "2rem",
      "&:hover": {
        cursor: "pointer",
        transform: "translateY(-3px)",
      },
    },
    glow: {
      color: "#fff",
      "&:hover": {
        textShadow:
        "0 0 10px #39FF14, 0 0 20px #39FF14",
      },
      
    },
  }));

  const classes = useStyles();

  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />

      <h1>RAHUL RELEKAR</h1>
      <p> 拉胡尔·雷卡 | राहुल रेलेकर | ರಾಹುಲ್ ರೆಲೆಕರ್</p>
      <p><strong>
        <ReactTypingEffect
          text={"Welcome to the official website of Rahul Relekar"}
          speed={40}
          eraseDelay={5000}
          eraseSpeed={40}
          typingDelay={500}
        />
        </strong>
      </p>
      {/* <p> 拉胡尔·雷卡 | राहुल रेलेकर | ರಾಹುಲ್ ರೆಲೆಕರ್</p> */}
      <div className="hero-btns">
        <Button
          className={classes.margin}
          // variant="outlined"
          color="primary"
        >
          <div className={classes.glow}>Personal</div>
        </Button>

        <Button
          className={classes.margin}
          // variant="outlined"
          color="primary"
        >
          <div className={classes.glow}>Professional</div>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
