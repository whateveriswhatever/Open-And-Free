import React from "react";
import HeaderNav from "./{components}/Header-Nav";
import MainReleasePage from "./{components}/Main-Release-Page";

const page = () => {
  return (
    <div className="bg-pink-900 desktop:w-full text-pink-200 flex flex-col justify-evenly">
      <>
        <>
          <HeaderNav context="You're almost there" />
        </>

        <>
          <MainReleasePage />
        </>
      </>
    </div>
  );
};

export default page;
