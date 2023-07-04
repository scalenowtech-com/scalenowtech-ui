import React from "react";

const ServiceCard = ({
  image,
  title,
  description,
  height = 280,
  width = 290,
}) => {
  return (
    <div className="tw-flex tw-justify-center tw-gap-20">
      <div className="tw-max-w-3xl tw-space-y-12 tw-border ">
        <h3 className="tw-text-6xl tw-tracking-wide">{title}</h3>
        <p className="tw-daisy-card tw-text-3xl">{description}</p>
        <button
          style={{ outline: "2px solid blue" }}
          className="tw-rounded-full tw-text-blue-700 tw-px-4 tw-py-2"
        >
          Enquire Now!
        </button>
      </div>
      <img style={{ height, width }} src={image} alt={title} />
    </div>
  );
};

export default ServiceCard;
