import Carousel from "react-bootstrap/Carousel";
import "./aboutslider.css";

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item interval={5500}>
        <div className="about_slider_div">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container floating">
                <img src="feature-banner.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>About us</h1>
              <p className="about_text">
                <b>Scalenow Technosolutions Pvt Ltd </b>, is a technology
                startup offering services in the domain of web and app
                development, software as service provider and end to end digital
                marketing solutions as like web content, SEO, SEM, Performance
                marketing, Video Marketing, Video Productions, Influencer
                marketing, Affiliate marketing etc.
                <br />
                <br />
                Our team of experienced professionals is dedicated to delivering
                customized solutions that meet the unique needs of each client,
                and to building long-term partnerships based on trust,
                integrity, and mutual success. Through our commitment to
                innovation, excellence, and customer satisfaction.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5500}>
        <div className="about_slider_div">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container floating">
                <img src="about-banner.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>Mission</h1>
              <p className="about_text">
                Mission is to empower businesses of all sizes with cutting-edge
                technology solutions that enable them to scale their operations
                and achieve their goals. We strive to provide innovative and
                reliable software development, IT consulting, and digital
                marketing services that drive growth, efficiency, and
                profitability for our clients. We aim to become a trusted
                partner for businesses seeking to leverage technology for
                competitive advantage and sustainable growth.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5500}>
        <div className="about_slider_div">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container floating">
                <img src="gl5.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h1>Vision</h1>
              <p className="about_text">
                We are committed to build value through technology and service
                excellence, which has taken us on a journey of success.
                <br />
                <br />
                Our passion lies in expanding our horizons and working with new
                partners who share the same vision.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
