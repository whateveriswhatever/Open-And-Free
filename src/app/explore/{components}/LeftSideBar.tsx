import React from "react";

const LeftSideBar = () => {
  return (
    <div
      id="left_navbar"
      className="desktop:w-[15%] desktop:h-[100%] bg-zinc-100 flex flex-col justify-center text-center"
    >
      <BrandIcon />
      <br />
      <OptionControllers />

      <div
        id="tail"
        className="desktop:h-[36rem] flex justify-center items-end"
      >
        <HelpController />
      </div>
    </div>
  );
};

export default LeftSideBar;

const BrandIcon: React.FC = () => {
  return (
    <>
      <div
        id="brand_icon"
        className="desktop:h-[4rem] flex items-center justify-center"
      >
        <h2 className="font-bold desktop:text-[2rem]">Group 3</h2>
      </div>
    </>
  );
};

// type Controller = {
//     icon: string;
//     content: string;
// };

const OptionControllers: React.FC = () => (
  <>
    <div
      id="option_controllers"
      className="flex flex-col justify-around desktop:h-[6rem]"
    >
      <MyLibrary />
      <Samples />
      <Stats />
    </div>
  </>
);

const MyLibrary: React.FC = () => (
  <>
    <div
      id="my_library"
      className="flex flex-row justify-center hover:cursor-pointer"
    >
      <div className="desktop:w-[20] desktop:h-[20] desktop:mr-[0.6rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-folder2-open"
          viewBox="0 0 16 16"
        >
          <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" />
        </svg>
      </div>
      <div id="content">
        <p className="desktop:text-[1rem]">My Library</p>
      </div>
    </div>
  </>
);

const Samples: React.FC = () => (
  <>
    <div
      id="samples"
      className="flex flex-row justify-center hover:cursor-pointer"
    >
      <div className="desktop:w-[20] desktop:h-[20] desktop:mr-[0.9rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-music-note-list"
          viewBox="0 0 16 16"
        >
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
          <path fill-rule="evenodd" d="M12 3v10h-1V3z" />
          <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
          <path
            fill-rule="evenodd"
            d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
      <div id="content">
        <p>Samples</p>
      </div>
    </div>
  </>
);

const Stats: React.FC = () => (
  <>
    <div
      id="stats"
      className="flex flex-row justify-center hover:cursor-pointer"
    >
      <div className="desktop:w-[20] desktop:h-[20] desktop:mr-[0.5rem] desktop:ml-[-1rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-pie-chart"
          viewBox="0 0 16 16"
        >
          <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
        </svg>
      </div>
      <div id="content">
        <p>Stats</p>
      </div>
    </div>
  </>
);

const HelpController: React.FC = () => {
  return (
    <>
      <div
        id="help"
        className="flex flex-row justify-center hover:cursor-pointer desktop:mb-[2rem]"
      >
        <div className="desktop:w-[20] desktop:h-[20] desktop:mr-[0.5rem] desktop:ml-[-1rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
          </svg>
        </div>
        <div id="content">Help</div>
      </div>
    </>
  );
};
