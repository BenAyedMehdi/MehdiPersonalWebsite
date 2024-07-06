import React from "react";

import { Button, Img, List, Text } from "components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { general } from "general";

const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start p-2.5 rounded-[10px] hover:bg-gray-100 transition-colors duration-300">
              <Img
                className="h-10 w-10"
                src={general.logo}
                alt="home"
              />
              <Text
                className="text-orange-A700 text-2xl w-auto"
                size="txtMarkoOneRegular20"
              >
                <Link to="/"> {general.name} </Link>
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row items-center gap-20  ">
          <Link to="/">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                About
              </Text>
            </Link>
            <Link to="/portfolio">
              <Text
                className="text-base cursor-pointer p-[13px] text-gray-900 rounded-[10px] hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300"
                size="txtManropeSemiBold16"
              >
                Portfolio
              </Text>
            </Link>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto items-center justify-start w-[228px]">
            <Link to="/contactpage" className="w-full">
              <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full hover:bg-gray-700 transition-colors duration-300">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
