import React from "react";
import BackNavigatorButton from "./BackNavigatorButton";
import { HighlightHeading } from "../../{components}/WhatIsTheNameOfYourTrack";
import CustomHTML5AudioTag from "./CustomHTML5AudioTag";
import { MoveNext } from "../../{components}/WhatIsTheNameOfYourTrack";
import Custom_NextNavigatorSection from "./Custom_NextNavigatorSection";

const Main = () => {
  return (
    <div
      id="upload_operator"
      className="desktop:w-full desktop:h-[672px] flex flex-col items-center 
      desktop:mt-[13rem]"
    >
      {/* Back navigator button */}
      <>
        <BackNavigatorButton dest="/songs/upload_release/build_your_release" />
      </>

      {/* Highlight heading 2 */}
      <>
        <Custom_HighlightHeading context="Upload your audio file" />
      </>

      {/* Add HTML5 audio file tag  */}
      <>
        <CustomHTML5AudioTag />
      </>

      {/* Next navigator button */}
      <>
        {/* <MoveNext /> */}
        <Custom_NextNavigatorSection dest="/songs/upload_release/build_your_release/what_is_genre" />
      </>
    </div>
  );
};

export default Main;

export const Custom_HighlightHeading: React.FC<{
  context: string;
}> = ({ context }) => {
  return (
    <>
      <div
        id="highlight-heading"
        className="desktop:text-[2rem]
        desktop:h-[169px]
        desktop:ml-[-6rem]"
      >
        {context}
      </div>
    </>
  );
};
