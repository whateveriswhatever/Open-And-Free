import React from "react";

const MainReleasePage = () => {
  return (
    <div
      id="main-release-page"
      className="desktop:w-full flex desktop:h-[881px] justify-center items-center"
    >
      <>
        <LeftMainRelasePage />
      </>

      <>
        <RightMainRelasePage />
      </>
    </div>
  );
};

export default MainReleasePage;

const LeftMainRelasePage: React.FC = () => {
  return (
    <>
      <div
        id="left-main-relase-page"
        className="desktop:h-[200px] flex flex-col justify-between"
      >
        <>
          <LeftMainReleasePageIntro />
        </>

        <>
          <LeftMainRelasePageNotice />
        </>
      </div>
    </>
  );
};

const RightMainRelasePage: React.FC = () => {
  return (
    <>
      <div
        id="right-main-release-page"
        className="desktop:w-[400px] desktop:h-[600px] bg-pink-300 desktop:rounded-[2rem]
        desktop:ml-[7rem]
        flex flex-col items-center justify-evenly"
      >
        <>
          <EmbeddedVideo />
        </>

        <>
          <EmbeddedVideoInfor />
        </>
      </div>
    </>
  );
};

const LeftMainReleasePageIntro: React.FC = () => {
  return (
    <>
      <div
        id="do-u-know-this?"
        className="flex flex-col justify-between desktop:h-[200px]"
      >
        <>
          <div
            id="back-button"
            className="flex justify-between items-center desktop:w-[70px] font-semibold"
          >
            <>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </div>
            </>

            <>
              <div>Back</div>
            </>
          </div>
        </>

        <>
          <div id="sub-script" className="flex flex-col justify-between">
            <>
              <div
                className="desktop:text-[2rem] font-bold
              desktop:mt-[1rem]"
              >
                Ready for the world to hear it?
              </div>
            </>

            <>
              <div className="desktop:mt-[0.8rem]">
                Last click to send your single to the stores.
              </div>
            </>
          </div>
        </>

        <>
          <div
            id="submit_release_button"
            className="desktop:h-[50px] desktop:w-[150px] desktop:rounded-[1.2rem] bg-pink-300 flex justify-center items-center
            desktop:mt-[2rem]"
          >
            <button>
              <p className="text-pink-900 font-bold">Submit release</p>
            </button>
          </div>
        </>
      </div>
    </>
  );
};

const LeftMainRelasePageNotice: React.FC = () => {
  return (
    <>
      <div id="notice" className="flex flex-col desktop:mt-[12rem]">
        <p>
          80% of all music never gets released, lying unheard and undiscovered.
        </p>
        <p>Open&Free is here to change it perpetually.</p>
      </div>
    </>
  );
};

const EmbeddedVideo: React.FC = () => {
  return (
    <>
      <div id="embedded_video" className="">
        {/* desktop:w-[90px] desktop:h-[90px] */}
        {/* <video controls>
            <source src="" />
        </video> */}
        <iframe
          width="350"
          height="300"
          src="https://www.youtube.com/embed/igIfiqqVHtA?si=hpdRaOLuSZ0Vsxas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

const EmbeddedVideoInfor: React.FC = () => {
  return (
    <>
      <div
        id="embedded_vid_infor"
        className="text-pink-900 font-medium flex flex-col justify-between 
        dekstop:h-[200px] desktop:w-[350px]"
      >
        <>
          <div id="timeline">July 04, 2024 (Pop)</div>
        </>

        <>
          <div id="song-name" className="desktop:text-[1.8rem] font-semibold">
            Enchanted
          </div>
        </>

        <>
          <div id="artist">Taylor Swift</div>
        </>
      </div>
    </>
  );
};
