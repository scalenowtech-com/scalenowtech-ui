import blog from "../../../assets/home/blog-1.jpg";
import gl9 from "../../../assets/home/gl9.jpg";
import gl2 from "../../../assets/home/gl2.png";
import dm2 from "../../../assets/home/dm2.jpg";
import gl4 from "../../../assets/home/gl4.jpg";
import gl3 from "../../../assets/home/gl3.jpg";

import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="service_section ">
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={gl3} />
              </div>

              <span className="card-title">Web Development</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={gl4} />
              </div>

              <span className="card-title">App Development</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={dm2} />
              </div>

              <span className="card-title">Digital Marketing</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={gl2} />
              </div>

              <span className="card-title">Software as Services</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={gl9} />
              </div>

              <span className="card-title">Online Platform</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="img-card iCard-style2">
            <div className="card-content">
              <div className="card-image">
                {/* <span className="card-caption">Image Caption</span> */}
                <img src={blog} />
              </div>

              <span className="card-title">Collateral Design</span>

              <div className="card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="card-link">
              <a href="#" title="Know More">
                <span>Know More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
