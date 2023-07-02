import React from "react";

const TechStack = () => {
  return (
    <section className="different-industry android-industries">
      <h1 className="section webhero webhero2 has-bg-image h1 hero-title2">
        Tech Stack
      </h1>
      <div className="container custom-container">
        <div className="row">
          <ul className="industry-list align-items-center justify-content-center">
            <li className="industry">
              <span className="icon icon1">
                <img src="https://static.vecteezy.com/system/resources/previews/000/355/112/original/vector-health-icon.jpg" />
              </span>
              <a href="#">
                <span className="name">Healthcare</span>
              </a>
            </li>

            <li className="industry">
              <span className="icon icon1">
                <img src="https://icon-library.com/images/ecommerce-icon/ecommerce-icon-29.jpg" />
              </span>
              <a href="#">
                <span className="name">ecommerce</span>
              </a>
            </li>

            <li className="industry">
              <span className="icon icon3">
                <img src="https://www.htyweb.org/wp-content/uploads/2016/07/education-icon2.png" />
              </span>
              <a href="#">
                <span className="name">Education</span>
              </a>
            </li>

            <li className="industry">
              <span className="icon icon3">
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-5/177800/231-1024.png" />
              </span>
              <a href="#">
                <span className="name">Banking</span>
              </a>
            </li>

            <li className="industry">
              <span className="icon icon5">
                <img src="https://image.freepik.com/free-vector/healthy-lifestyle-icon-concept-with-icon-design_24911-17816.jpg" />
              </span>
              <a href="#">
                <span className="name">Lifestyle</span>
              </a>
            </li>

            <li className="industry">
              <span className="icon icon6">
                <img src="https://image.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg" />
              </span>
              <a href="#">
                <span className="name">Sports</span>
              </a>
            </li>

            <li className="industry m-top">
              <span className="icon icon7">
                <img src="https://odia.ig.com.br/_midias/png/2020/01/23/icone_restaurant_png_8-15290110.png" />
              </span>
              <a href="#">
                <span className="name">Food &amp; Restaurants</span>
              </a>
            </li>

            <li className="industry m-top">
              <span className="icon icon8">
                <img src="https://static.vecteezy.com/system/resources/previews/000/591/631/original/vector-a-travel-icon-elements.jpg" />
              </span>
              <a href="#">
                <span className="name">Travel</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
