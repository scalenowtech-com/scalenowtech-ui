import React from "react";
import "./Gallery.css";

import gl12 from "../../../assets/home/gl12.png";
import dm2 from "../../../assets/home/dm2.jpg";
import gl3 from "../../../assets/home/gl3.jpg";
import gl4 from "../../../assets/home/gl4.jpg";
import dm4 from "../../../assets/home/dm4.jpg";
import gl9 from "../../../assets/home/gl9.jpg";
import gl10 from "../../../assets/home/gl10.png";
import gl8 from "../../../assets/home/gl8.jpg";

const Gallery = () => {
  return (
    <section className="gallery_main" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery_main_container">
        <div className="gallery">
          <a href="gl12.jpg" data-lightbox="models" data-title="Caption1">
            <img src={gl12} />
          </a>
          <a href="dm2.jpg" data-lightbox="models" data-title="Caption2">
            <img src={dm2} />
          </a>
          <a href="gl3.jpg" data-lightbox="models" data-title="Caption3">
            <img src={gl3} />
          </a>
          <a href="gl4.jpg" data-lightbox="models" data-title="Caption4">
            <img src={gl4} />
          </a>
          <a href="dm4.jpg" data-lightbox="models" data-title="Caption5">
            <img src={dm4} />
          </a>
          <a href="gl9.jpg" data-lightbox="models" data-title="Caption6">
            <img src={gl9} />
          </a>
          <a href="gl10.png" data-lightbox="models" data-title="Caption7">
            <img src={gl10} />
          </a>
          <a href="gl8.jpg" data-lightbox="models" data-title="Caption8">
            <img src={gl8} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
