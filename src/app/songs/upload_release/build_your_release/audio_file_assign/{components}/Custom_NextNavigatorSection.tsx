import React from "react";
import {
  NextButton,
  NextButtonOption,
} from "../../{components}/WhatIsTheNameOfYourTrack";

const Custom_NextNavigatorSection: React.FC<{ dest: string }> = ({ dest }) => {
  return (
    <div
      id="custom_next_nav_button"
      className="flex items-center justify-between
    desktop:w-[300px] 
    desktop:mt-[2rem] desktop:ml-[-8rem]
    "
    >
      <>
        <NextButton dest={dest} />
      </>

      <>
        <NextButtonOption />
      </>
    </div>
  );
};

export default Custom_NextNavigatorSection;
