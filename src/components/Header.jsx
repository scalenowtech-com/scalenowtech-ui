import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsBorderWidth } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import { BsAndroid2 } from "react-icons/bs";
import { BsUbuntu } from "react-icons/bs";
import { BsPalette } from "react-icons/bs";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

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
            <label for="close-btn" className="btn close-btn">
              <BsXCircleFill color="#002d70" />
            </label>
            <li>
              <a href="#" className="desktop-item">
                Services
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Services
              </label>
              <div className="mega-box">
                <div className="content">
                  <div class="group">
                    <h2 class="title">
                      <BsAndroid2 /> Software Services
                    </h2>
                    <ul class="list">
                      <li>
                        <span>
                          <Link to="/webdevelopment">
                            Website Design & Development
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/appdevelopment">App Development</Link>
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
                  <div class="group">
                    <h2 class="title">
                      <BsUbuntu /> Digital Marketing
                    </h2>
                    <ul class="list">
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
                  <div class="group">
                    <h2 class="title">
                      <BsPalette /> Collateral Design
                    </h2>
                    <ul class="list">
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
          <label for="menu-btn" className="btn menu-btn">
            <BsBorderWidth size="24px" color="#002df7" />
          </label>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
