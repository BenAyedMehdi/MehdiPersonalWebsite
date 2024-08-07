import React from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";
import { general } from "general";

const LandingPageFooter = () => {
  return (
    <>
      <footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-8 w-full">
        <div className="flex flex-col md:gap-10 gap-[30px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row gap-4 md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                {/* <Img className="h-10 w-10" src={general.logo} alt="home_One" /> */}
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  <Link to="/">{general.name}</Link>
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-auto md:h-auto items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    {general.phone}
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    {general.email}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  {/* <a target="_blank" href={general.facebook}>
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div>
                  </a> */}
                  <a target="_blank" href={general.github}>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/github-icon-orange.png"
                      alt="github"
                    />
                  </a>
                  <a target="_blank" href={general.linkedin}>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </a>
                  <a target="_blank" href={general.youtube}>
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_clock_orange_a700.svg"
                        alt="clock"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex text-center flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              {/* <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  <Link to="/services">Services</Link>
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Websites
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Mobile Apps 
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Desktop apps
                  </Text>
                </div>
              </div> */}
              <div className=" text-center flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Link to="/">
                  <Text
                    className="text-lg cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                    size="txtManropeBold18Gray900"
                  >
                    Home
                  </Text>
                </Link>
              </div>
              <div className=" text-center flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Link to="/portfolio">
                  <Text
                    className="text-lg cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                    size="txtManropeBold18Gray900"
                  >
                    Portfolio
                  </Text>
                </Link>
                {/* <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    My projects
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    My experience
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    My skills
                  </Text>
                </div> */}
              </div>

              {/* <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Link to="/about">
                  <Text
                    className="text-lg cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                    size="txtManropeBold18Gray900"
                  >
                    About
                  </Text>
                </Link>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Blogs
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    <Link to="/about">My adventures</Link>
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    A day in my life
                  </Text>
                </div>
              </div> */}
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Link to="/contactpage">
                  <Text
                    className="text-lg cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                    size="txtManropeBold18Gray900"
                  >
                    Conatct
                  </Text>
                </Link>
                {/* <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Hire me
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Partnership
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Ask me anything
                  </Text>
                </div> */}
              </div>
            </div>
          </div>
          <Text
            className="text-base text-center text-gray-900 w-full"
            size="txtManropeSemiBold16"
          >
            © 2024. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
