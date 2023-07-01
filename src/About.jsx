import React from "react";
import "./components/About.css";
import Slideshow from "./components/aboutslider";

const About = () => {
  return (
    <section className="about_section" id="about">
      <Slideshow />
    </section>
  );
};

export default About;
