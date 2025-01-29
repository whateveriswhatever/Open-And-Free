import React from "react";
import BackNavigatorButton from "../../audio_file_assign/{components}/BackNavigatorButton";
import { HighlightHeading } from "../../{components}/WhatIsTheNameOfYourTrack";

const Main = () => {
  return (
    <div
      id="picking-up"
      className="desktop:w-full desktop:h-[672px] flex flex-col items-center"
    >
      {/* Back navigator button  */}
      <>
        <BackNavigatorButton dest="/songs/upload_release/build_your_release/what_is_genre" />
      </>

      {/* Heading line */}
      <>
        <HighlightHeading context="Choose streaming platforms" />
      </>

      {/* HTML input boxes */}
      <></>

      {/* Short notice */}
      <></>

      {/* Next navigator button */}
      <></>
    </div>
  );
};

export default Main;
