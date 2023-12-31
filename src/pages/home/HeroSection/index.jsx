import React from "react";
import Slider from "./HeroSlider";

import homeBg from "../../../assets/home/home-bg.png";

const Home = () => {
  return (
    <section
      className="section hero has-bg-image"
      style={{ backgroundImage: `url(${homeBg})` }}
      aria-label="home"
    >
      <div className="container">
        <div className="hero-content floating" id="cloud">
          <h1 className="h1 hero-title">
            We strive to provide innovative and reliable software development
          </h1>

          <p className="hero-text">
            Customise web and app application development
          </p>

          <p className="hero-text">
            Recognised by :{" "}
            <a href="index.html">
              <img
                src="https://globemoving.net/blog/wp-content/uploads/2016/04/start-up.png"
                className="img-fluid"
                alt="logo"
              />
            </a>
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
        <Slider />
      </div>
    </section>
  );
};

export default Home;
