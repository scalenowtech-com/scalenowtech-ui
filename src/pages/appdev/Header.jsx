import React from "react";

const Header = () => {
  return (
    <section className="section webhero has-bg-image" aria-label="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1 hero-title">APP DEVELOPMENT</h1>
            <p className="hero-text">
              Welcome to our App Development Services…. Bringing Your Ideas to
              Life
            </p>
            <p className="hero-text">
              We are a reputed Android app development company in India,
              providing full-cycle mobile app development solutions that benefit
              a huge number of people & give a good return on investment.
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
              src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/img/mobile-app-development/png/mobile-app-development.png"
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

export default Header;
