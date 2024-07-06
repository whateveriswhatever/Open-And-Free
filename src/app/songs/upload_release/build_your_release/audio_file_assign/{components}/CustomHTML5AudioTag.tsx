import React from "react";

const CustomHTML5AudioTag = () => {
  return (
    <div
      id="add-song"
      className="flex flex-col items-center justify-evenly
    border-[2px] rounded-[1rem] 
    desktop:w-[444px] desktop:h-[150px]
    desktop:mt-[-5rem] "
    >
      {/* Instruction */}
      <>
        <div id="instruction" className="font-bold">
          Choose your audio or drag & drop
        </div>
      </>

      {/* HTML5 media tag */}
      <>
        <div id="media-input">
          <input type="file" id="song-file" accept="" />
        </div>
      </>

      {/* Eligible song types */}
      <>
        <div>WAV, MP3, M4A, FLAC, AIFF, WMA</div>
      </>
    </div>
  );
};

export default CustomHTML5AudioTag;
