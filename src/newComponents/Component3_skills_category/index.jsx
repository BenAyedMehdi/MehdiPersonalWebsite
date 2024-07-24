import React from "react";

import { Button, Img, Text } from "components";

const Component3_skills_category = ({ name, icon, skills}) => {

  function SkillsComponent({ skills }) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full">
        
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <img
              src={skill.src}
              alt={skill.alt}
              className="mx-auto"
              style={{ width: "50px", height: "50px" }}
            />
            <h3 className="text-center font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="bg-white-A700 rounded-xl p-6 flex flex-col md:gap-5 gap-6 items-center justify-start w-1/3 sm:w-full">
        <div className="flex flex-1  flex-row gap-[18px] items-center justify-center w-full">
          <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
            <Img
              className="h-8"
              src={icon ? icon : "images/img_checkmark.svg"}
              alt="checkmark"
            />
          </Button>
          <div className="flex flex-col gap-3.5 items-start justify-start">
            <Text
              className="text-2xl text-gray-900 tracking-[-0.92px] w-full"
              size="txtManropeExtraBold46"
            >
              {name ? name : "Frontend"}
            </Text>
          </div>
        </div>
          <SkillsComponent
            skills={skills ? skills : []}
          />
        </div>
    </>
  );
};

export default Component3_skills_category;
