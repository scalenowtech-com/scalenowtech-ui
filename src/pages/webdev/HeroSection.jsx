import React from "react";

const HeroSection = () => {
  return (
    <section className="section webhero has-bg-image" aria-label="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1 hero-title">
              Custom Software Development Company
            </h1>
            <p className="hero-text">
              Get the best software consulting services that benefit your
              business module and makes you win the race.Have a talk over coffee
              now!
            </p>

            {/* <a href="#" className="btn btn-outline">Free Consultation</a> */}
            <a href="#" className="btn btn-primary">
              Free Consultation
            </a>
          </div>
          <div className="col-md-6 floating">
            <img
              decoding="async"
              className="img-fluid anim1 entered lazyloaded"
              src="https://theninehertz.com/wp-content/themes/ninehertz/assets/img/custom-software-development/png/custom-software-development.png"
              alt="Custom Software Development Company"
              width="829"
              height="667"
              data-lazy-src="https://theninehertz.com/wp-content/themes/ninehertz/assets/img/custom-software-development/png/custom-software-development.png"
              data-ll-status="loaded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
