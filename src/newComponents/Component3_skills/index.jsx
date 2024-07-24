import React from "react";

import { Button, Img, Text } from "components";
import Component3_skills_category from "newComponents/Component3_skills_category";

const Component3_skills = () => {
  const categories = [
    {
      name: "Frontend",
      icon: "images/img_checkmark.svg",
      skills: [
        {
          src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
          alt: "JavaScript",
          name: "JavaScript",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
          alt: "React",
          name: "React",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/15484/15484402.png",
          alt: "Angular",
          name: "Angular",
        },
        {
          src: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3257079/file-type-tailwind-icon-md.png",
          alt: "Tailwind",
          name: "Tailwind",
        },
      ],
    },
    {
      name: "Backend",
      icon: "images/img_camera.svg",
      skills: [
        {
          src: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
          alt: "C#",
          name: "C#",
        },
        {
          src: "https://clipground.com/images/asp-net-logo-png-1.png",
          alt: ".NET",
          name: ".NET",
        },
        {
          src: "https://static-00.iconduck.com/assets.00/swagger-icon-2048x2048-563qbzey.png",
          alt: "Swagger",
          name: "Swagger",
        },
        {
          src: "https://static-00.iconduck.com/assets.00/postman-icon-1990x2048-vq52fl5n.png",
          alt: "Postman",
          name: "Postman",
        },
      ],
    },
    {
      name: "Cloud",
      icon: "images/img_arrowdown.svg",
      skills: [
        {
          src: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png",
          alt: "SQL server",
          name: "SQL server",
        },
        {
          src: "https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png",
          alt: "GitHub",
          name: "GitHub",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
          alt: "Docker",
          name: "Docker",
        },
        {
          src: "https://cdn.iconscout.com/icon/free/png-512/azure-devops-3628645-3029870.png",
          alt: "Azure",
          name: "Azure",
        },
      ],
    },
    // {
    //   name: "Languages",
    //   icon: "images/img_arrowdown.svg",
    //   skills: [
    //     {
    //       src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    //       alt: "Python",
    //       name: "Python",
    //     },
    //     {
    //       src: "https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png",
    //       alt: "Java",
    //       name: "Java",
    //     },
    //     {
    //       src: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    //       alt: "Typescript",
    //       name: "Typescript",
    //     },
    //     {
    //       src: "https://cdn.iconscout.com/icon/free/png-512/azure-devops-3628645-3029870.png",
    //       alt: "JSON",
    //       name: "JSON",
    //     },
    //   ],
    // },
  ];

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
              {categories.map((category) => (
                <Component3_skills_category
                name={category.name}
                icon={category.icon}
                skills={category.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component3_skills;
