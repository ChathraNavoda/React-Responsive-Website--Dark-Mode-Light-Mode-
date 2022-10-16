import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">
            <h6>TogetherWe</h6>
          </p>
          <h1 className="title">We want give them a better tommorow</h1>

          <p className="description">
            We want give them a better tommorow.We want give them a better
            tommorow
          </p>
          <button>Get Started</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
