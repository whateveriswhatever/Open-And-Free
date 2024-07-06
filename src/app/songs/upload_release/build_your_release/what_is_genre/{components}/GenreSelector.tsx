import React from "react";

const GenreSelector = () => {
  return (
    <div
      id="genre-selector"
      className="desktop:w-[469px] desktop:h-[69px] desktop:mt-[-5rem] desktop:ml-[-2rem]
    border-[2px] rounded-[1rem]
    flex flex-col justify-center
    "
    >
      <>
        <div className="desktop:ml-[1.38rem]">
          <label>Genre</label>
        </div>
      </>

      <>
        <select
          name="genres"
          id="genres"
          className="bg-transparent outline-none
        desktop:ml-[1rem]
        desktop:w-[444px]"
        >
          <option>Techno</option>
          <option>Jazz</option>
          <option>Rap</option>
          <option>EDM</option>
        </select>
      </>
    </div>
  );
};

export default GenreSelector;
