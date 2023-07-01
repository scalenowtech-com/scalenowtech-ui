import React from "react";
import "./components/style.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsHeartArrow } from "react-icons/bs";

const Webdesignhome = () => {
  return (
    <>
      <section className="section webhero has-bg-image" aria-label="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h1 hero-title">
                Custom Software Development Company
              </h1>
              <p className="hero-text">
                Get the best software consulting services that benefit your
                business module and makes you win the race.Have a talk over
                coffee now!
              </p>

              {/* <a href="#" className="btn btn-outline">Free Consultation</a> */}
              <a href="#" className="btn btn-primary">
                Free Consultation
              </a>
            </div>
            <div className="col-md-6 floating">
              <img
                decoding="async"
                class="img-fluid anim1 entered lazyloaded"
                src="https://theninehertz.com/wp-content/themes/ninehertz/assets/img/custom-software-development/png/custom-software-development.png"
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
              <div class="content-box content-box-small">
                <div class="icon-box">
                  <img
                    src="https://www.digitalgoogly.com/assets/images/ecom_web_4_1.png"
                    alt="E-Commerce Website Design Company in Kolkata, India"
                  />
                </div>
                <h5 className="iconbox-heading">
                  Landing Page Design Services
                </h5>
                <p>
                  We provide attractive landing pages to your business following
                  the latest trends and practices that generate quality leads.{" "}
                </p>
                <p>
                  <BsFillCheckCircleFill /> HTML/CSS
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div class="content-box content-box-small">
                <div class="icon-box">
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
                  <BsFillCheckCircleFill /> Next.Js/React.Js/Angular.Js/
                  <br />
                  Express/Node.Js/Vue/Svelte.Js
                </p>
                <p>
                  <BsFillCheckCircleFill /> WordPress/PHP/Laravel/Code
                  Ignitor/Cake PHP
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div class="content-box content-box-small">
                <div class="icon-box">
                  <img
                    src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/landing_page.png"
                    alt="E-Commerce Website Design Company in Kolkata, India"
                  />
                </div>
                <h5 className="iconbox-heading">
                  Corporate Website Development
                </h5>
                <p>
                  Does your business need a professional website? We are the
                  right stop for all types of corporate website development
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container content_business">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div class="content-box content-box-small">
                <div class="icon-box">
                  <img
                    src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/responsive_design.png"
                    alt="E-Commerce Website Design Company in Kolkata, India"
                  />
                </div>
                <h5 className="iconbox-heading">
                  Responsive Web Design Services
                </h5>
                <p>
                  Using advanced tools and technologies, our website designers
                  can feature websites on desktops, smartphones, and tablets
                  alike with responsive website design services.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div class="content-box content-box-small">
                <div class="icon-box">
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
              <div class="content-box content-box-small">
                <div class="icon-box">
                  <img
                    src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/dedicated_team.png"
                    alt="Top E-Commerce Website Development Company"
                  />
                </div>
                <h5 className="iconbox-heading">Dedicated designer team</h5>
                <p>
                  As a pioneer in web designing company in India, we move boldly
                  with the concept of Perfection At Scalenow, we specialize in
                  creating custom websites that are well-designed, and
                  responsive with the help of our expert UI/UX team.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container content_business">
                    <div className="row">
                       
                    </div> 
                </div>

                <div className="container content_business">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="content-box content-box-small">
                                <div class="icon-box"><img src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/web_portal.png" alt="E-Commerce Website Design Company in Kolkata, India"/></div>
                                <h5 className="iconbox-heading">Web Portal Designing Services</h5>
                                <p>By following the latest trends and practices of design, our web designers in India offer the web portal designing services based on the industry.  </p>
                                </div>
                            </div>
                        <div className="col-md-6">
                            <div class="content-box content-box-small">
                                <div class="icon-box"><img src="https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-54b5662/wp-content/uploads/2022/03/mobile_app.png" alt="Top E-Commerce Website Development Company"/></div>
                                <h5 className="iconbox-heading">Mobile App UI/UX Design</h5>
                                <p>Our website design company in India offers appealing and eye catchy mobile app UI/UX design implementing the latest web designing practices and trends. </p>
                            </div>
                        </div>
                    </div> 
                </div> */}
      </section>
      <section className="section webhero webhero2 has-bg-image">
        <h1 className="h1 hero-title2">Why Choose Us</h1>
        <div className="container robust-new-services">
          <div className="row">
            <div className="col-md-3">
              <div class="service-box sb2">
                <h3 class="iconbox-heading">
                  <i class="icon icon2"></i>{" "}
                  <a href="https://theninehertz.com/services/mobile-app-development-company/android">
                    Attention to Detail
                  </a>
                </h3>
                <hr />
                <p>
                  We believe in the power of small details. Our team pays
                  meticulous attention to every aspect of your website, from
                  pixel-perfect designs to intuitive navigation and smooth user
                  interfaces.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class="service-box sb2">
                <h3 class="iconbox-heading">
                  <i class="icon icon2"></i>{" "}
                  <a href="https://theninehertz.com/services/mobile-app-development-company/android">
                    SEO-Friendly Approach
                  </a>
                </h3>
                <hr />
                <p>
                  A beautifully designed website is worthless if it doesn't
                  attract organic traffic. We optimize your website's structure,
                  content, and code to improve its visibility in search engines,
                  helping you rank higher and reach a wider audience.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class="service-box sb2">
                <h3 class="iconbox-heading">
                  <i class="icon icon2"></i>{" "}
                  <a href="https://theninehertz.com/services/mobile-app-development-company/android">
                    Collaborative Process
                  </a>
                </h3>
                <hr />
                <p>
                  Throughout the development process, we maintain open lines of
                  communication with our clients, ensuring that your feedback
                  and ideas are incorporated at every stage. Your satisfaction
                  is our top priority, and we work tirelessly to deliver a
                  website that exceeds your expectations.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div class="service-box sb2">
                <h3 class="iconbox-heading">
                  <i class="icon icon2"></i>{" "}
                  <a href="https://theninehertz.com/services/mobile-app-development-company/android">
                    Ongoing Support
                  </a>
                </h3>
                <hr />
                <p>
                  Our relationship doesn't end once your website is launched. We
                  provide comprehensive support and maintenance services to
                  ensure that your website continues to perform at its best.
                  From regular updates and security patches to content
                  management and performance optimization, we've got you
                  covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section webhero webhero2 has-bg-image"
        style={{ marginTop: 40 }}
      >
        <h1 className="h1 hero-title2">Tech Stack</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 floating">
              <img
                decoding="async"
                class="img-fluid anim1 entered lazyloaded"
                src="https://theninehertz.com/wp-content/themes/ninehertz/assets/img/custom-software-development/png/custom-software-development.png"
                alt="Custom Software Development Company"
                width="829"
                height="667"
                data-lazy-src="https://theninehertz.com/wp-content/themes/ninehertz/assets/img/custom-software-development/png/custom-software-development.png"
                data-ll-status="loaded"
              />
            </div>
            <div className="col-md-6">
              <ul className="tech_stack_ul">
                <li>
                  <BsFillCheckCircleFill /> Front-end: This encompasses the user
                  interface (UI) and user experience (UX) aspects of an
                  application. With HTML, CSS, JavaScript, and front-end we also
                  use frameworks like React, Angular, or Vue.js
                </li>

                <li>
                  <BsFillCheckCircleFill /> Back-end: We use popular back-end
                  technologies including languages like Python, Java, Ruby, or
                  Node.js, as well as frameworks like Django, Spring, Ruby on
                  Rails, or Express.js.
                </li>

                <li>
                  <BsFillCheckCircleFill /> Databases: Data storage and
                  retrieval are critical for many applications. Common types of
                  databases that we use are relational databases ( MySQL,
                  PostgreSQL) and NoSQL databases ( MongoDB, Cassandra).
                </li>

                <li>
                  <BsFillCheckCircleFill /> Deployment and DevOps: In the
                  practice of the deployment, automation, and management of
                  applications, The DevOps Tools we use are Docker, Kubernetes,
                  Jenkins, and Git.
                </li>
                {/* <li><BsFillCheckCircleFill/> Front-end: This encompasses the user interface (UI) and user experience (UX) aspects of an application. With HTML, CSS, JavaScript, and front-end we also use frameworks like React, Angular, or Vue.js</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process-setup nft-align pwa-process">
        <h1 className="h1 hero-title2">Process Steps</h1>
        <div className="container">
          <div className="row">
            <ul class="process-timeline">
              <li>
                {" "}
                <span class="line">
                  <abbr class="nbr">01</abbr>
                </span>
                <br />
                <h3 class="f-22 mb-20">Discuss your requirement.</h3>
                {/* <p>Let us know your ideas and desires, don’t worry it’s secure and confidential.</p> */}
              </li>
              <li>
                {" "}
                <span class="line">
                  <abbr class="nbr">02</abbr>
                </span>
                <br />
                <h3 class="f-22 mb-20">
                  Get a visually stunning user interface and design.
                </h3>
                {/* <p>We’ll put forth a strategy to implement points in order to achieve the output.</p> */}
              </li>
              <li>
                {" "}
                <span class="line">
                  <abbr class="nbr">03</abbr>
                </span>
                <br />
                <h3 class="f-22 mb-20">
                  Choose a desired development technology for your website.
                </h3>
                {/* <p>Hire developers with whom you wish to conduct interviews and select the ideal candidate.</p> */}
              </li>
              <li>
                {" "}
                <span class="line">
                  <abbr class="nbr">04</abbr>
                </span>
                <br />
                <h3 class="f-22 mb-20">
                  Get a dedicated team of expert engineers.
                </h3>
                {/* <p>Choose one of our Flexi-hiring models based on your budget and business requirements.</p> */}
              </li>
              <li>
                {" "}
                <span class="line">
                  <abbr class="nbr">05</abbr>
                </span>
                <br />
                <h3 class="f-22 mb-20">Launch your website.</h3>
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
    </>
  );
};

export default Webdesignhome;
