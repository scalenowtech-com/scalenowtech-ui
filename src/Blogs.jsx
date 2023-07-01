import React from "react";
import "./components/blogs.css";
const Blogs = () => {
  return (
    <section className="blogs_section">
      <h2>Blogs</h2>
      <div className="cards-wrapper">
        <div className="card-grid-space">
          <a
            className="card card1"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
          >
            <div className="blog_inner">
              <h1>Blog1</h1>
              <p>
                The syntax of a language is how it works. How to actually write
                it. Learn HTML syntax…
              </p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">Read More</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card card2"
            href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
          >
            <div className="blog_inner">
              <h1>Blog2</h1>
              <p>
                The syntax of a language is how it works. How to actually write
                it. Learn HTML syntax…
              </p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">Read More</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card card3"
            href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
          >
            <div className="blog_inner">
              <h1>Blog3</h1>
              <p>
                The syntax of a language is how it works. How to actually write
                it. Learn HTML syntax…
              </p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">Read More</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <a
            className="card card4"
            href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
          >
            <div className="blog_inner">
              <h1>Blog4</h1>
              <p>
                The syntax of a language is how it works. How to actually write
                it. Learn HTML syntax…
              </p>
              <div className="date">6 Oct 2017</div>
              <div className="tags">
                <div className="tag">Read More</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
