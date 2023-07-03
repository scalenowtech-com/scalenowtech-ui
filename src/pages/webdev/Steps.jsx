import React from "react";

const Steps = () => {
  return (
    <section className="process-setup nft-align pwa-process">
      <h1 className="h1 hero-title2">Process Steps</h1>
      <div className="container">
        <div className="row">
          <ul className="process-timeline">
            <li>
              {" "}
              <span className="line">
                <abbr className="nbr">01</abbr>
              </span>
              <br />
              <h3 className="f-22 mb-20">Discuss your requirement.</h3>
              {/* <p>Let us know your ideas and desires, don’t worry it’s secure and confidential.</p> */}
            </li>
            <li>
              {" "}
              <span className="line">
                <abbr className="nbr">02</abbr>
              </span>
              <br />
              <h3 className="f-22 mb-20">
                Get a visually stunning user interface and design.
              </h3>
              {/* <p>We’ll put forth a strategy to implement points in order to achieve the output.</p> */}
            </li>
            <li>
              {" "}
              <span className="line">
                <abbr className="nbr">03</abbr>
              </span>
              <br />
              <h3 className="f-22 mb-20">
                Choose a desired development technology for your website.
              </h3>
              {/* <p>Hire developers with whom you wish to conduct interviews and select the ideal candidate.</p> */}
            </li>
            <li>
              {" "}
              <span className="line">
                <abbr className="nbr">04</abbr>
              </span>
              <br />
              <h3 className="f-22 mb-20">
                Get a dedicated team of expert engineers.
              </h3>
              {/* <p>Choose one of our Flexi-hiring models based on your budget and business requirements.</p> */}
            </li>
            <li>
              {" "}
              <span className="line">
                <abbr className="nbr">05</abbr>
              </span>
              <br />
              <h3 className="f-22 mb-20">Launch your website.</h3>
              {/* <p>At last, we will initiate the development process on your project after all the above processes are done alright.</p> */}
            </li>
          </ul>
          <p className="last_note">
            <BsFillCheckCircleFill /> Choose Scalenow Tech for top-notch web
            development services that propel your business forward.
          </p>
          <p className="last_note">
            <BsFillCheckCircleFill /> Contact us today to discuss your project
            and let us help you unlock your online potential!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
