import React from "react";
import BackNavigatorButton from "../../audio_file_assign/{components}/BackNavigatorButton";
import { Custom_HighlightHeading } from "../../audio_file_assign/{components}/Main";
import GenreSelector from "./GenreSelector";
import Custom_NextNavigatorSection from "../../audio_file_assign/{components}/Custom_NextNavigatorSection";

const Main = () => {
  return (
    <div
      id="initial_genre"
      className="desktop:w-full desktop:h-[672px] flex flex-col items-center 
    desktop:mt-[13rem]"
    >
      {/* Back navigator button */}
      <>
        <BackNavigatorButton dest="/songs/upload_release/build_your_release/audio_file_assign" />
      </>

      {/* Heading */}
      <>
        <Custom_HighlightHeading context="What's the primary genre?" />
      </>

      {/* HTML5 select input */}
      <>
        <GenreSelector />
      </>

      {/* Next navigator button */}
      <>
        <Custom_NextNavigatorSection dest="" />
      </>
    </div>
  );
};

export default Main;
