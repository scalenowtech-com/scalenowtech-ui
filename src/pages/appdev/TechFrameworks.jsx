import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import appdevImage from "../../assets/appdev/app-development.png";
import mobileAppImage from "../../assets/appdev/mobile-app.png";
import supportImage from "../../assets/appdev/support_and_maintainance.png";
import heroImage from "../../assets/appdev/hero.png";

const TechFrameworks = () => {
  const tabSelectStyle = {
    color: "white",
    bg: "red.800",
    borderBottom: "2px solid teal",
  };
  const tabStyle = {
    fontSize: 20,
    margin: "0 10px",
    bg: "teal.300",
    color: "white",
    p: 4,
    _hover: {
      bg: "yellow.600",
      color: "white",
    },
  };
  return (
    <div className="tw-bg-gray-100 tw-p-24">
      <Tabs isLazy className="container" size="md" align="center">
        <TabList
          py="3"
          display="flex"
          p="4"
          justifyContent="center"
          borderBottom="none"
        >
          <Tab _selected={tabSelectStyle} {...tabStyle}>
            Native App Development
          </Tab>
          <Tab _selected={tabSelectStyle} {...tabStyle}>
            Hybrid App Development
          </Tab>
          <Tab _selected={tabSelectStyle} {...tabStyle}>
            Custom Mobile App Development
          </Tab>
          <Tab _selected={tabSelectStyle} {...tabStyle}>
            App Technology Consulting
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-28">
            <p className="tw-w-2/3 tw-max-w-3xl tw-text-5xl">
              Being the best app builders in India, we provide seamless
              navigation to visually appealing designs, we prioritize
              user-centric design principles to ensure an exceptional app
              experience.{" "}
            </p>
            <img
              className="tw-mr-60 tw-h-[400px]"
              src={appdevImage}
              alt="native-app-development"
              border="0"
            />
          </TabPanel>
          <TabPanel className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-28">
            <p className="tw-w-2/3 tw-max-w-3xl tw-text-4xl">
              At Scalenow, our highly dedicated app developers offer
              best-in-class cross-platform mobile app development that runs
              smoothly on all platforms like iOS and Android. <br />
              <br />
              Our app development services focus on building strong and scalable
              architectures. We ensure that your app can handle high user loads,
              data storage, and future updates.
            </p>
            <img
              className="tw-mr-60 tw-h-[400px] tw-py-20"
              src={mobileAppImage}
              alt="native-app-development"
              border="0"
            />
          </TabPanel>
          <TabPanel className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-28">
            <p className="tw-w-2/3 tw-max-w-3xl tw-text-4xl">
              A large percentage of all mobile devices worldwide run on Android.
              Therefore, good Android app development can help you reach out to
              more customers, improve your brand image, create a loyal customer
              base, and improve sales. <br />
              <br />
              From concept to deployment, we ensure that your app stands out.
            </p>
            <img
              className="tw-mr-64 tw-h-[400px] tw-py-24"
              src={supportImage}
              alt="native-app-development"
              border="0"
            />
          </TabPanel>
          <TabPanel className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-28">
            <p className="tw-w-2/3 tw-max-w-3xl tw-text-5xl">
              Our highly skilled professional consulting team offers technical
              knowledge to select the finest technology stack and create a
              better mobile app.
            </p>
            <img
              className="tw-mr-64 tw-h-[400px] tw-py-8"
              src={heroImage}
              alt="native-app-development"
              border="0"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TechFrameworks;
