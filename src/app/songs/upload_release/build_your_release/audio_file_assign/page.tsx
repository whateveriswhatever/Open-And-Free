import React from "react";
import HeaderNav from "../../{components}/Header-Nav";
import Main from "./{components}/Main";

const page = () => {
  return (
    <div id="" className="bg-amber-50 text-stone-500 desktop:font-[2rem]">
      <>
        <HeaderNav context="Let's build you release" />
      </>

      <>
        <Main />
      </>
    </div>
  );
};

export default page;
