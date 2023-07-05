import React from "react";

import Header from "./Header";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import TechStack from "./TechStack";
import DevProcess from "./DevProcess";
import TechFrameworks from "./TechFrameworks";
import Faq from "./Faq";
import Industries from "./Industries";

const Appdevelopment = () => {
  return (
    <main className="tw-space-y-32">
      <Header />
      <TechStack />
      <Services />
      <Industries />
      <TechFrameworks />
      <WhyChoose />
      <DevProcess />
      <Faq />
    </main>
  );
};

export default Appdevelopment;
