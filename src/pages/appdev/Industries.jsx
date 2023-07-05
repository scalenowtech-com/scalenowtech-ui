import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const IndustriesData = [
  "Health Care",
  "eCommerce",
  "Education",
  "Banking",
  "Lifestyle",
  "Sports",
  "Food & Restaurants",
  "Travel",
  "Social",
  "Entertainment",
  "Game",
  "Transportation",
];

const Industries = () => {
  return (
    <div className="tw-container tw-min-h-fit tw-h-[500px] tw-mx-auto">
      <div className="tw-daisy-footer tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center sm:tw-justify-between tw-h-full tw-p-10 tw-text-base-content">
        <div className="tw-container sm:tw-w-1/2">
          <h3 className="tw-text-6xl">
            Mobile apps spanning a range of industries
          </h3>
          <p className="tw-text-4xl">
            When it comes to any need related to application development, we
            have solutions for just about all industries and niches. We rank
            among the world's top mobile app development companies list.
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-text-4xl">
          {IndustriesData.map((item, index) => (
            <a
              key={`industriesdata-${index}`}
              className="tw-daisy-link-hover tw-daisy-link"
            >
              <BsCheckCircle className="tw-inline" /> {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
