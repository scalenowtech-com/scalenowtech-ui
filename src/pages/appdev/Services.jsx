import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import androidMobileImage from "../../assets/appdev/android_mobile2.png";
import android2 from "../../assets/appdev/customized_solutions.png";
import userCentric from "../../assets/appdev/usercentricdesign.png";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import ServiceCard from "./ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const serviceData = [
  {
    image: android2,
    title: "iOS App Development Services",
    description:
      "We specialize in delivering custom iOS software to both first-time entrepreneurs and enterprises across all sectors, all over the globe. Our team of experts will develop your app and ensure that it not only aligns but goes beyond Apple users’ expectations.",
  },
  {
    image: androidMobileImage,
    title: "Flutter App Development Services",
    description:
      "We will help you design and develop, test, and launch full-fledged Flutter apps. We will also find the best product-market fit to deploy your application across several platforms seamlessly. Our team of Flutter Android app development and deployment experts can also take your existing Android or iOS application across platforms and operating systems.",
    height: 300,
    width: 400,
  },
];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      effect="cards"
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      navigation
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={`service-${index}`}>
          <ServiceCard {...item} />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div className="tw-flex tw-justify-center tw-gap-20">
          <div className="tw-max-w-3xl tw-space-y-12 tw-border">
            <h3 className="tw-text-6xl tw-tracking-wide">
              On-Demand App Development
            </h3>
            <div>
              {[
                "Taxi Booking",
                "Food Delivery",
                "Educational App",
                "eWallet App",
                "Grocery Delivery",
              ].map((item, index) => (
                <p key={`service_item-${index}`} className="tw-text-3xl">
                  <BsFillCheckCircleFill className="tw-inline" /> {item}
                </p>
              ))}
            </div>
            <button
              style={{ outline: "2px solid blue" }}
              className="tw-rounded-full tw-px-4 tw-py-2 tw-text-blue-700"
            >
              Enquire Now!
            </button>
          </div>
          <img style={{ height: 280, width: 290 }} src={userCentric} />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
