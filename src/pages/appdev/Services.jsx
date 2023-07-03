import React from "react";
import androidImage from "../../assets/appdev/android2.png";
import flutterIcon from "../../assets/appdev/flutter_icon.png";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const serviceData = [
  {
    image: androidImage,
    title: "iOS App Development Services",
    description:
      "We specialize in delivering custom iOS software to both first-time entrepreneurs and enterprises across all sectors, all over the globe. Our team of experts will develop your app and ensure that it not only aligns but goes beyond Apple users’ expectations.",
  },
  {
    image: androidImage,
    title: "Flutter App Development Services",
    description:
      "We will help you design and develop, test, and launch full-fledged Flutter apps. We will also find the best product-market fit to deploy your application across several platforms seamlessly. Our team of Flutter Android app development and deployment experts can also take your existing Android or iOS application across platforms and operating systems.",
  },
  {
    image: androidImage,
    title: "On-Demand App Development",
    description:
      "Taxi Booking Food Delivery Educational App eWallet App Grocery Delivery",
  },
];
const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="tw-flex">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="tw-border tw-border-blue-600 tw-px-4 tw-py-2">
          Enquire Now!
        </button>
      </div>
      <img className="tw-w-20 tw-h-20" src={image} alt={title} />
    </div>
  );
};

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={`service-${index}`}>
          <ServiceCard {...item} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};
