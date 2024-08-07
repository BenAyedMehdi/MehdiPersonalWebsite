import React from "react";

import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import { general } from "general";

const Component9_1 = () => {
  return (
    <>
      <div className="flex flex-col font-manrope items-center justify-center max-w-[1440px] pl-[120px] pr-[173px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start max-w-[1147px] mx-auto w-full">
          <div className="flex flex-1 flex-col gap-11 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Hello, I am Mehdi
              </Text>
              <Text
                className="leading-[180.00%] max-w-[531px] md:max-w-full text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                Creating websites is what I love doing!
                <br />I am a proactive software engineer with over 3 years of
                experience in the development of full-stack solutions. Skilled
                in backend development with a strong grasp of frontend
                technologies. Throughout my past experiences, I have
                demonstrated my ability to manage complex projects from
                conception to implementation, enhancing system performance and
                user experience. 
                {/* I am a <strong>full-stack</strong> developer, specialized in <strong>backend </strong>development, wired to
                create solutions and implement <strong>creative</strong> ideas,{" "}
                designed to unlock the potential of a <strong>team</strong> , a
                company, or a project. With my <strong>technical</strong>{" "}
                background, strong <strong>communication</strong> skills, and{" "}
                passion for <strong>innovation,</strong> I am aiming to build{" "}
                <strong>scalable</strong> and maintainable solutions to deliver
                the best <strong>performance</strong> and{" "}
                <strong>value.</strong> */}
              </Text>
            </div>

            <Button className="bg-white-A700 border border-gray-600 border-solid text-xl cursor-pointer font-semibold py-[17px] rounded-[10px]  text-gray-900 w-full hover:bg-gray-700 hover:text-white-A700 transition-colors duration-300">
              <Link to="/portfolio">
                <Text
                  className="text-xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px] w-full"
                  size="txtManropeBold24Gray900"
                >
                  View my projects
                </Text>
              </Link>
            </Button>

            <div className="flex md:flex-row sm:flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-4 items-start justify-between w-full">
                {/* <a target="_blank" href={general.facebook}>
                  <Img
                    className="h-[60px] min-w-[60px] rounded-[20px] hover:bg-white-A700 "
                    src="images/img_clock_gray_600.svg"
                    alt="clock"
                  />
                </a> */}
                <a target="_blank" href={general.github}>
                  <Img
                    className="h-[60px] min-w-[60px] rounded-[20px] hover:bg-white-A700 "
                    src="images/github-icon.png"
                    alt="clock"
                  />
                </a>
                <a target="_blank" href={general.linkedin}>
                  <Img
                    className="h-[60px] min-w-[60px] rounded-[10px] hover:bg-white-A700"
                    src="images/img_linkedin_gray_600.svg"
                    alt="linkedin"
                  />
                </a>
                <a target="_blank" href={general.youtube}>
                  <Img
                    className="h-[60px] min-w-[60px] rounded-[20px] hover:bg-white-A700"
                    src="images/img_play.svg"
                    alt="play"
                  />
                </a>
              </div>
              <Button className="bg-gray-900 cursor-pointer min-w-[80px] font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full hover:bg-gray-700 transition-colors duration-300">
                <Link to="/contactpage">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
            <Img
              className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
              src={general.images.img1}
              alt="rectangleTwenty"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Component9_1;
