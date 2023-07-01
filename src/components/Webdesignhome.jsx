import React from "react";
// import Slider from "./components/slider";
import "style.css";

const Webdesignhome = () => {
  return (
    <section className="section hero has-bg-image" aria-label="home">
      <div className="container">
        <div className="hero-content floating" id="cloud">
          <h1 className="h1 hero-title">
            We strive to provide innovative and reliable software development
          </h1>

          <p className="hero-text">
            Customise web and app application development
          </p>

          <div className="btn-wrapper">
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>

            <a href="#" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webdesignhome;
