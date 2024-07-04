import React from "react";

const WhatIsTheNameOfYourTrack = () => {
  return (
    <div
      id="name-of-track"
      className="desktop:w-full desktop:h-[881px] flex flex-col items-center justify-evenly"
    >
      <>
        <HighlightHeading context="What's the name of your track?" />
      </>

      <>
        <TrackTitleInputBox />
      </>

      <>
        <Rules />
      </>

      <>
        <MoveNext />
      </>
    </div>
  );
};

export default WhatIsTheNameOfYourTrack;

const HighlightHeading: React.FC<{
  context: string;
}> = ({ context }) => {
  return (
    <>
      <div
        id="highlight-heading"
        className="desktop:text-[2rem]
      desktop:h-[444px]"
      >
        {context}
      </div>
    </>
  );
};

const TrackTitleInputBox: React.FC = () => {
  return (
    <>
      <div
        id="track-title-input"
        className="flex flex-col justify-evenly border-[2px] desktop:w-[444px] desktop:h-[80px]
        desktop:rounded-[1rem]
        desktop:mt-[-38rem]"
      >
        <>
          <div className="desktop:ml-[1rem] font-medium">Track title</div>
        </>

        <>
          <div
            className="desktop:ml-[1rem]
           desktop:text-[1.4rem]
           desktop:font-semibold"
          >
            <input
              type="text"
              placeholder="Enter title of the track"
              className="bg-transparent outline-none"
            />
          </div>
        </>
      </div>
    </>
  );
};

const Rules: React.FC = () => {
  return (
    <>
      <div id="rules" className="desktop:mt-[-12rem] desktop:ml-[-6rem]">
        <>
          <div>Please DON'T:</div>
        </>

        <>
          <ul>
            <li>- Don't mention featured artists here.</li>
            <li>- Don't include year in song title</li>
            <li>- Don't add extra details (e.g: "EP", "Single").</li>
          </ul>
        </>
      </div>
    </>
  );
};

const MoveNext: React.FC = () => {
  return (
    <>
      <div
        id="move-next"
        className="desktop:w-[300px] flex justify-between items-center 
        desktop:mt-[-10rem] desktop:ml-[-8rem]"
      >
        <>
          <NextButton />
        </>

        <>
          <NextButtonOption />
        </>
      </div>
    </>
  );
};

const NextButton: React.FC = () => {
  return (
    <>
      <div
        id="next-button"
        className="desktop:w-[100px] desktop:h-[50px] bg-pink-300 text-[#000] flex justify-center items-center 
        desktop:rounded-[1.4rem] 
        font-bold"
      >
        <button>Next</button>
      </div>
    </>
  );
};

const NextButtonOption: React.FC = () => {
  return (
    <>
      <div
        id="option-reminder"
        className="flex justify-between desktop:w-[150px]"
      >
        <>
          <div
            id="iconic"
            className="desktop:w-[30px] desktop:h-[30px] bg-neutral-300 flex justify-center items-center font-bold desktop:rounded-[0.6rem]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </div>
        </>

        <>
          <div>or Press Enter</div>
        </>
      </div>
    </>
  );
};
