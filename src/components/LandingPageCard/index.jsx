import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageCard = ({ project }) => {
  const projectChoice = () => {
    console.log(project.id);
    localStorage.setItem("projectId", project.id);
  };

  const openRedirectURL = () => {
    window.open(project.url, "_blank"); // replace with your YouTube video URL
  };

  return (
    <div className="flex flex-1 flex-col gap-[27px] h-full items-start justify-start w-full">
      <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-4 py-[16px] rounded-[10px] w-full">
        <div className="flex flex-col items-start justify-start w-full image-container relative">
          <Img
            className="h-[360px] border border-red-101 border-solid w-full rounded-[10px] px-0 object-cover transition-opacity duration-500 ease-in-out hover:opacity-10"
            src={project?.images.img1}
          />
          <div className="px-[13px] rounded-[10px] absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out bg-black bg-opacity-70 text-white-A700">
            <p>{project?.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-3 py-[20px] items-center justify-start w-full">
            <Text
              className="flex-1 text-2xl text-center text-gray-900 w-auto h-[40px]"
              size="txtManropeSemiBold16"
            >
              {project?.name}
            </Text>
          </div>
          {/* <div className="flex flex-col gap-[21px] pb-4 items-start justify-start w-full">
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
                <Text
                  className="flex-1 text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  {project?.highlights.category}
                </Text>
              </div>
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  {project?.highlights.state}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img className="h-5 w-5" src="images/img_icon.svg" alt="icon" />
                <Text
                  className="flex-1 text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  {project?.highlights.duration}
                </Text>
              </div>
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  {project?.highlights.date}
                </Text>
              </div>
            </div>
          </div> */}

          <div className="flex flex-row gap-[31px] items-center justify-center w-full">
            <Button
              onClick={projectChoice}
              className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] min-w-[45%] text-base text-center text-white-A700 w-auto hover:bg-gray-700 transition-colors duration-300"
            >
              <Link to="/projectdetails">View Details</Link>
            </Button>
            <Button
              className="common-pointer bg-gray-900 cursor-pointer gap-[10px] flex items-center rounded-[10px] py-[13px] justify-center min-w-[45%] hover:bg-gray-700 transition-colors duration-300"
              onClick={openRedirectURL}
              rightIcon={<Img src="images/img_play.svg" alt="Video" />}
            >
              <div className="font-manrope font-semibold text-lg text-center text-white-A700">
                Try Demo
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
