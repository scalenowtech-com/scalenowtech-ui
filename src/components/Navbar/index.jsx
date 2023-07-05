import {
  BsPalette,
  BsUbuntu,
  BsBorderWidth,
  BsXCircleFill,
  BsAndroid2,
} from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

function Header() {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src="logo.png" />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <BsXCircleFill className="tw-inline" color="#002d70" />
            </label>
            <li>
              <a href="#" className="desktop-item">
                Services
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Services
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="group">
                    <h2 className="title">
                      <BsAndroid2 className="tw-inline" /> Software Services
                    </h2>
                    <ul className="list">
                      <li>
                        <span>
                          <Link to="/web-dev">
                            Website Design & Development
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/app-dev">App Development</Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Software Development</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Maintenance & Support</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>API Integration Services</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Migration Services</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Software Deployment</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group">
                    <h2 className="title">
                      <BsUbuntu className="tw-inline" /> Digital Marketing
                    </h2>
                    <ul className="list">
                      <li>
                        <span>
                          <a>Content Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Search Engine Optimization</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Social Media Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Mail Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Influencer Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Mobile Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Video Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Reputation Marketing</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Paid Seacrh</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Video Production</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Advertising</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="group">
                    <h2 className="title">
                      <BsPalette className="tw-inline" /> Collateral Design
                    </h2>
                    <ul className="list">
                      <li>
                        <span>
                          <a>Logo Design</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Booklet/Brochure</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Newsletter</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Infographic Design</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a>Banners/Posters</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/discover">Business Solutions</Link>
            </li>
            <li>
              <a href="#about" className="button at_the_same_time">
                About
              </a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#" className="booking_consulation">
                Book a free Consultation{" "}
              </a>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <BsBorderWidth className="tw-inline" size="24px" color="#002df7" />
          </label>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
