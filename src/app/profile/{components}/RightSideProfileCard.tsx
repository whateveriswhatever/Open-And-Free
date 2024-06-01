"use client";
import React from "react";

const RightSideProfileCard = () => {
  return (
    <div id="right_side_card" className="flex flex-col justify-evenly">
      <div id="first_and_last_name" className="flex flex-row ">
        <>
          <div>
            <p>First name</p>
            <input type="text" placeholder="Your first name" />
          </div>
        </>

        <>
          <div>
            <p>Last name</p>
            <input type="text" placeholder="Your first name" />
          </div>
        </>
      </div>

      <div id="about" className="desktop:mt-[-5rem]">
        <>
          <div>
            <p>About you</p>
            <textarea id="description" name="" rows={4} cols={50}></textarea>
          </div>
        </>
      </div>
    </div>
  );
};

export default RightSideProfileCard;
