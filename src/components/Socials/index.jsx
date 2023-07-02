import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="sticky-social">
      <ul className="social">
        <li className="fb">
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li className="twitter">
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        {/* <li className="insta"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li className="pin"><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li> */}
        <li className="wp">
          <a href="#">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
        <li className="vim">
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li className="call">
          <a href="#">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
