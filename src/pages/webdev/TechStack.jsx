import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const TechStack = () => {
  return (
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
              className="img-fluid anim1 entered lazyloaded"
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
                <BsFillCheckCircleFill /> Databases: Data storage and retrieval
                are critical for many applications. Common types of databases
                that we use are relational databases ( MySQL, PostgreSQL) and
                NoSQL databases ( MongoDB, Cassandra).
              </li>

              <li>
                <BsFillCheckCircleFill /> Deployment and DevOps: In the practice
                of the deployment, automation, and management of applications,
                The DevOps Tools we use are Docker, Kubernetes, Jenkins, and
                Git.
              </li>
              {/* <li><BsFillCheckCircleFill/> Front-end: This encompasses the user interface (UI) and user experience (UX) aspects of an application. With HTML, CSS, JavaScript, and front-end we also use frameworks like React, Angular, or Vue.js</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
