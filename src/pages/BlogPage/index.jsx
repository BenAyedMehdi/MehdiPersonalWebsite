import React from "react";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import Component1 from "newComponents/Component1";
import Component22 from "newComponents/Component22";

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <Component22 />
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogPagePage;
