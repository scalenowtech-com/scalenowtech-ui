import React from "react";
import "./components/Contact.css";
import Multi from "./components/Multiselect";

const Contact = () => {
  return (
    <div className="contact-body" id="contact">
      <section className="contact_section">
        <div className="section-header">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="contact-info">
              <iframe
                width="100%"
                height="530"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mangalam%20Business%20Centre,5th%20Floor,%20Suite%20No-29,%20Acropolis%20Mall,Raj%20Danga%20Main%20Rd,%20Sector%20E,%20East%20Kolkata,%20Kolkata,%20West%20Bengal,700107.+(Scalenow%20Technosolution%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  distance maps
                </a>
              </iframe>
            </div>

            <div className="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                {/* <Multiselect
                  isObject={false}
                  onRemove={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={["option1","option2" , "option3"]}
                /> */}

                <Multi />

                <div className="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>
                <div className="input-box">
                  <input type="number" required="true" name="" />
                  <span>Phone</span>
                </div>
                <div className="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <input type="email" required="true" name="" />
                  <span>Location</span>
                </div>
                <div className="input-box">
                  <textarea required="true" name="" />
                  <span className="textarea_span">Type your Message...</span>
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
