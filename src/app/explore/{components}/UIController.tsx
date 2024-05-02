import React from "react";

const UIController = () => {
  return (
    <div id="ui_controller" className="w-[100%] h-[100%] flex flex-col">
      <UIHeader />
      <UIMain />
    </div>
  );
};

export default UIController;

const UIHeader: React.FC = () => (
  <>
    <div
      id="ui_header"
      className="w-[100%] desktop:h-[80px] flex flex-row justify-end items-center"
    >
      <UserAccount />
    </div>
  </>
);

const UserAccount: React.FC = () => (
  <>
    <div
      id="user_account"
      className="desktop:w-[40px] desktop:h-[40px] border-2 border-slate-400 rounded-[1.2rem] desktop:mr-[3rem]"
    ></div>
  </>
);

const SearchAndUpload: React.FC = () => {
  return (
    <>
      <div
        id="search_and_upload"
        className="w-[100%] flex flex-row justify-around"
      >
        <div id="heading">
          <h2 className="font-bold desktop:text-[2.2rem]">My Library</h2>
        </div>

        <div
          id="search_and_upload_sections"
          className="desktop:w-[400px] flex flex-row justify-evenly items-center desktop:h-[69px]"
        >
          <>
            <div
              id="searcher"
              className="border-[2px] rounded-[1.4rem] border-gray-200 flex flex-row justify-between items-center desktop:w-[38%] desktop:h-[48px]"
            >
              <div className="desktop:w-[40%] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search library"
                  className="desktop:w-[90%] desktop:h-[38px] focus:outline-none desktop:text-[0.9rem]"
                />
              </div>
            </div>
          </>
          <>
            <div
              id="uploader"
              className="border-[2px] rounded-[1.4rem] border-gray-200 flex flex-row justify-evenly items-center desktop:w-[38%] desktop:h-[48px]"
            >
              <div className="desktop:w-[40%] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </div>

              <div>
                <button className="desktop:text-[0.9rem]">Upload music</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

const UIMain: React.FC = () => (
  <>
    <div id="ui_main" className="w-[100%] desktop:h-[100%]">
      <SearchAndUpload />
    </div>
  </>
);
