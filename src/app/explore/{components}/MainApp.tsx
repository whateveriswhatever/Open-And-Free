import React from "react";
import LeftSideBar from "./LeftSideBar";
import UIController from "./UIController";

const MainApp = () => {
  return (
    <div
      id="explorer_app"
      className="desktop:w-[80%] desktop:h-[80%] flex justify-between bg-white"
    >
      <LeftSideBar />
      <UIController />
    </div>
  );
};

export default MainApp;
