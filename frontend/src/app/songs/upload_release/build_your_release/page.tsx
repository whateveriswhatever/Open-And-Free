import React from "react";
import HeaderNav from "../{components}/Header-Nav";
import WhatIsTheNameOfYourTrack from "./{components}/WhatIsTheNameOfYourTrack";

const page = () => {
  return (
    <div id="" className="bg-amber-50 text-stone-500 desktop:font-[2rem]">
      <>
        <HeaderNav context="Let's build your release" />
      </>

      <>
        <WhatIsTheNameOfYourTrack />
      </>
    </div>
  );
};

export default page;
