import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section
      className="section webhero webhero2 has-bg-image"
      aria-label="home"
    >
      <h1 className="h1 hero-title2">Our Web Design Services</h1>
      <p className="hero-text2">
        Are you thinking to have an online presence for your business? Look no
        further!
        <br /> Our web development services are here to help you unlock your
        brand's true potential in the digital world.
      </p>
      <div className="container content_business">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://www.digitalgoogly.com/assets/images/ecom_web_4_1.png"
                  alt="E-Commerce Website Design Company in Kolkata, India"
                />
              </div>
              <h5 className="iconbox-heading">Landing Page Design Services</h5>
              <p>
                We provide attractive landing pages to your business following
                the latest trends and practices that generate quality leads.{" "}
              </p>
              <p>
                <BsFillCheckCircleFill className="tw-inline"/> HTML/CSS
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://www.digitalgoogly.com/assets/images/ecom_web_4_2.png"
                  alt="Top E-Commerce Website Development Company"
                />
              </div>
              <h5 className="iconbox-heading">Custom Web Designing</h5>
              <p>
                We develop custom applications to help companies save smarter,
                grow faster, and serve better; through automation, business
                process management, and integrated systems to create unique
                advantages for the business.
              </p>
              <p>
                <BsFillCheckCircleFill className="tw-inline"/> Next.Js/React.Js/Angular.Js/
                <br />
                Express/Node.Js/Vue/Svelte.Js
              </p>
              <p>
                <BsFillCheckCircleFill className="tw-inline"/> WordPress/PHP/Laravel/Code
                Ignitor/Cake PHP
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/landing_page.png"
                  alt="E-Commerce Website Design Company in Kolkata, India"
                />
              </div>
              <h5 className="iconbox-heading">Corporate Website Development</h5>
              <p>
                Does your business need a professional website? We are the right
                stop for all types of corporate website development services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container content_business">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/responsive_design.png"
                  alt="E-Commerce Website Design Company in Kolkata, India"
                />
              </div>
              <h5 className="iconbox-heading">
                Responsive Web Design Services
              </h5>
              <p>
                Using advanced tools and technologies, our website designers can
                feature websites on desktops, smartphones, and tablets alike
                with responsive website design services.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/corporate_ui.png"
                  alt="Top E-Commerce Website Development Company"
                />
              </div>
              <h5 className="iconbox-heading">Tailored Web Solutions:</h5>
              <p>
                Our team of expert web developers takes the time to understand
                your specific needs and crafts a tailor-made solution that
                aligns perfectly with your vision and we ensure that your
                website has exceptional user experience and functionality.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="content-box content-box-small">
              <div className="icon-box">
                <img
                  src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/dedicated_team.png"
                  alt="Top E-Commerce Website Development Company"
                />
              </div>
              <h5 className="iconbox-heading">Dedicated designer team</h5>
              <p>
                As a pioneer in web designing company in India, we move boldly
                with the concept of Perfection At Scalenow, we specialize in
                creating custom websites that are well-designed, and responsive
                with the help of our expert UI/UX team.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
