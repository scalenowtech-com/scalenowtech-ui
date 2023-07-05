import React from "react";

import androidImage from "../../assets/appdev/android2.png";
import flutterIcon from "../../assets/appdev/flutter_icon.png";
import iosIcon from "../../assets/appdev/ios_icon.png";
import reactNativeIcon from "../../assets/appdev/react-native.svg";
import swiftIcon from "../../assets/appdev/swiftui-og.png";

const TechStackData = [
  {
    name: "Android",
    image: androidImage,
  },
  {
    name: "Flutter",
    image: flutterIcon,
  },
  {
    name: "iOS",
    image: iosIcon,
  },
  {
    name: "React Native",
    image: reactNativeIcon,
  },
  {
    name: "Swift",
    image: swiftIcon,
  },
];

const TechStack = () => {
  return (
    <section className="different-industry android-industries">
      <h1 className="section webhero webhero2 has-bg-image h1 hero-title2">
        Tech Stack
      </h1>
      <div className="container custom-container">
        <div className="row">
          <ul className="industry-list align-items-center justify-content-center">
            {TechStackData.map((item, index) => (
              <li key={`techdata-${index}`} className="industry tw-z-30 hover:tw-scale-105">
                <span className="icon tw-cursor-pointer icon1">
                  <img src={item.image} className="tw-h-32 tw-w-32"/>
                </span>
                <a href="#">
                  <span className="name">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
