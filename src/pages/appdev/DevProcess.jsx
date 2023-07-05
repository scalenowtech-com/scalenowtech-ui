import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const DevProcess = () => {
  return (
    <section className="process-setup nft-align pwa-process">
      <h1 className="h1 hero-title2 !tw-text-gray-800 !tw-text-6xl">Process Steps</h1>
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
            <BsFillCheckCircleFill className="tw-inline"/> Don't let your app idea remain a dream,
            Choose Scalenow for professional app development services that bring
            your vision to life.Contact us today to discuss your project and
            embark on an exciting journey to success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
