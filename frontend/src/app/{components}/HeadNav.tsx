"use client";
import React from "react";
import Operator from "./Operator";
import { useState } from "react";

const HeadNav = () => {
  return (
    <div className="w-full height-[4rem] flex flex-row">
      <div className="w-full flex justify-center mt-[2rem] desktop:ml-[15rem] tablet:ml-[-1rem]">
        <div className="w-[800px] flex flex-row justify-evenly">
          <Operator />
        </div>
      </div>
      <LoginSignUpSection />
    </div>
  );
};

export default HeadNav;

const LoginSignUpSection: React.FC = () => {
  return (
    <div
      id="login_signup_section"
      // phone:mr-[1rem] tablet:mr-[2rem]
      className="flex flex-row desktop:w-[269px] tablet:w-[200px] min-[540px]:w-[120px] phone:w-[100px] desktop:text-[0.8rem] justify-evenly mt-[1rem] desktop:mr-[4rem] phone:ml-[-6rem] phone:mt-[1rem] min-[344px]:mt-[0.1rem] tablet:ml-[-9rem] min-[540px]:ml-[-7rem]"
    >
      <LoginButton />
      <SignUpButton />
    </div>
  );
};

// const Button: React.FC = () => {
//   return (
//     <div></div>
//   );
// };

const LoginButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="flex justify-center phone:w-[3rem] phone:h-[1.5rem] tablet:w-[5rem] tablet:h-[3rem] border-2 rounded-3xl border-pink-900 phone:text-[0.5rem] tablet:text-[0.8rem] desktop:text-[0.85rem] font-bold desktop:mt-[1rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="">
          <a href="/login">Login</a>
        </button>
      </div>
    </>
  );
};

const SignUpButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={`flex justify-center phone:w-[3rem] phone:h-[1.5rem] tablet:w-[5rem] tablet:h-[3rem] border-2 rounded-3xl border-pink-900 ${
          isHovered ? "bg-gray-700" : "bg-pink-900"
        } text-white phone:text-[0.5rem] tablet:text-[0.8rem] desktop:text-[0.85rem] font-bold desktop:mt-[1rem]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button>
          <a href="/signup">Sign up</a>
        </button>
      </div>
    </>
  );
};
