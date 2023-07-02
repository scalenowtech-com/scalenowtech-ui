import Carousel from "react-bootstrap/Carousel";

import heroSlide1 from "../../../assets/home/hero-slide-1.jpg";
import heroSlide2 from "../../../assets/home/hero-slide-2.jpg";
import heroSlide3 from "../../../assets/home/hero-slide-3.jpg";

const Slider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={heroSlide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={heroSlide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={heroSlide3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
