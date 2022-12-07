import React from "react";
import "../css/index.css";
import hero from "../images/air-hero.png";

function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-photo" src={hero} alt="Image hero" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
