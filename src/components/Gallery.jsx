import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery_main" id="gallery">
      <h2>Gallery</h2>
      <div class="gallery_main_container">
        <div class="gallery">
          <a href="gl12.jpg" data-lightbox="models" data-title="Caption1">
            <img src="gl12.jpg" />
          </a>
          <a href="dm2.jpg" data-lightbox="models" data-title="Caption2">
            <img src="dm2.jpg" />
          </a>
          <a href="gl3.jpg" data-lightbox="models" data-title="Caption3">
            <img src="gl3.jpg" />
          </a>
          <a href="gl4.jpg" data-lightbox="models" data-title="Caption4">
            <img src="gl4.jpg" />
          </a>
          <a href="dm4.jpg" data-lightbox="models" data-title="Caption5">
            <img src="dm4.jpg" />
          </a>
          <a href="gl9.jpg" data-lightbox="models" data-title="Caption6">
            <img src="gl9.jpg" />
          </a>
          <a href="gl10.png" data-lightbox="models" data-title="Caption7">
            <img src="gl10.png" />
          </a>
          <a href="gl8.jpg" data-lightbox="models" data-title="Caption8">
            <img src="gl8.jpg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
