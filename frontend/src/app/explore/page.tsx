import React from "react";
import MainApp from "./{components}/MainApp";

const page = () => {
  return (
    <div
      id="explore_page"
      className="min-h-screen bg-pink-200 flex justify-center items-center"
    >
      <MainApp />
    </div>
  );
};

export default page;
