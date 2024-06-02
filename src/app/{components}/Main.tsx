"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main = () => {
  return (
    <div className="desktop:w-[100vw] desktop:h-[500px] flex flex-col justify-center items-center phone:mt-[4rem]">
      <Deatail />
      <br />
      <ShortIntroduction />
      <br />
      <SubIntroduction />
      <br />
      <ExploreSound content={"Explore Sounds"} />
    </div>
  );
};

export default Main;

const Deatail: React.FC = () => {
  return (
    <div className="phone:text-[16px]">
      <h3>Group 3 Music app</h3>
    </div>
  );
};

const ShortIntroduction: React.FC = () => {
  return (
    <div className="desktop:w-[490px] phone:w-[300px] tablet:w-[369px] phone:text-[20px] tablet:text-[30px]">
      <h1 className="text-5xl">Find the right sounds for your next hit.</h1>
    </div>
  );
};

const SubIntroduction: React.FC = () => {
  return (
    <div className="desktop:w-[468px] phone:w-[330px]">
      <h3>
        Dive into expertly made music samples, covering all music styles. Get
        creative with endless sound choices.
      </h3>
    </div>
  );
};

type ButtonType = {
  content: String;
  // src: String;
};

const ExploreSound: React.FC<ButtonType> = ({ content }) => {
  const router = useRouter();

  // React.useEffect(() => {
  //   // using Hash Map to store current cookie's key-value pairs
  //   let cookieLookUp: any = {};
  //   let fileteredCookiePath: string[] = document.cookie.split(";");

  //   fileteredCookiePath.map((each: string) => {
  //     let curr: string[] = each.split("=");
  //     if (curr[0][0] !== "_") {
  //       cookieLookUp[curr[0]] = curr[1];
  //     }
  //   });

  //   console.log(`cookieLookUp: ${Object.values(cookieLookUp)}`);
  // }, []);
  return (
    <>
      <div className="flex justify-center phone:w-[4rem] phone:h-[1.9rem] tablet:w-[8rem] tablet:h-[4rem] border-2 rounded-3xl border-pink-900 phone:text-[0.5rem] tablet:text-[0.8rem] desktop:text-[0.85rem] font-bold desktop:mt-[1rem]">
        <button
          onClick={() => {
            // using Hash Map to store current cookie's key-value pairs
            let cookieLookUp: any = {};
            let fileteredCookiePath: string[] = document.cookie.split(";");

            fileteredCookiePath.map((each: string) => {
              let curr: string[] = each.split("=");
              if (curr[0][0] !== "_") {
                cookieLookUp[curr[0]] = curr[1];
              }
            });

            let isUserSignedIn: boolean = " firstname" in cookieLookUp;
            if (isUserSignedIn) {
              router.push("/explore");
            } else {
              router.push("/login");
            }
          }}
        >
          {content}
        </button>
      </div>
    </>
  );
};
