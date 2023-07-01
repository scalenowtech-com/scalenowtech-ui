import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30" style={{ paddingTop: 73 }}>
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>
                    Mangalam Business Centre,5th Floor, Suite No-29, Acropolis
                    Mall,Raj Danga Main Rd, Sector E, East Kolkata, Kolkata,
                    West Bengal,700107.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9830607796</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>scalenow@scalenowtech.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="./logo.png" className="img-fluid" alt="logo" />
                  </a>
                  <a href="index.html">
                    <img
                      src="https://globemoving.net/blog/wp-content/uploads/2016/04/start-up.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp-w whatsapp-bg"></i>
                  </a>
                  {/* <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a> */}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">Business Solutions</a>
                  </li>
                  <li>
                    <a href="#">blogs</a>
                  </li>
                  <li>
                    <a href="#">gallery</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">career</a>
                  </li>
                  <li>
                    <a href="#">CSR</a>
                  </li>
                  <li>
                    <a href="#">investor relations</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023 Scalenow Technosolutions Pvt Ltd, All
                  Right Reserved | Privacy Policy | Terms of Services{" "}
                  <a href="#"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
