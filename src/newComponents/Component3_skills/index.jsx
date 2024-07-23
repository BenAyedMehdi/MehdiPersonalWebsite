import React from "react";

import { Button, Img, Text } from "components";
import Component3_skills_category from "newComponents/Component3_skills_category";

const Component3_skills = () => {
  return (
    <>
      <div className="bg-orange-200 flex flex-col font-manrope items-center justify-center py-6 md:px-10 sm:px-5 px-[120px] w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 text-center items-center justify-between w-full">
              <Text
                className="text-center text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                size="txtManropeExtraBold36"
              >
                My Skills
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full min-w-[auto]">
            <div className="flex flex-row gap-10 md:gap-5 sm:flex-col w-full items-center justify-start">
              <Component3_skills_category
                name={"Frontend"}
                icon={"images/img_checkmark.svg"}
              />

              <Component3_skills_category
                name={"Backend"}
                icon={"images/img_camera.svg"}
              />

              <Component3_skills_category
                name={"Cloud"}
                icon={"images/img_arrowdown.svg"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3_skills;
