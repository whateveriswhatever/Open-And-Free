"use client";
import React, { useState, useEffect } from "react";

type UserCookieData = {
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  lastname: string;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

const RightSideProfileCard: React.FC<UserCookieData> = ({
  firstname,
  setFirstname,
  lastname,
  setLastname,
  description,
  setDescription,
}) => {
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [currentFirstname, setCurrentFirstname] = useState<string>("");
  const [currentLastname, setCurrentLastname] = useState<string>("");
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const [isChangingOnFirstname, setIsChangingOnFirstname] =
    useState<boolean>(false);
  const [isChangingOnLastname, setIsChangingOnLastname] =
    useState<boolean>(false);
  const [isChangingOnBio, setIsChangingOnBio] = useState<boolean>(false);

  React.useEffect(() => {
    console.log(`cookies check: ${document.cookie}`);
    // using HashMap to store cookie's key-value pairs
    let cookieLookup: any = {};

    let fileredCookiePath: string[] = document.cookie.split(";");
    fileredCookiePath.map((each: string) => {
      let curr: string[] = each.split("=");
      // seeking for the actual key-value pairs
      console.log(`curr[0][0] : ${curr[0][0]}`);
      if (curr[0][0] !== "_") {
        cookieLookup[curr[0]] = curr[1];
      }
    });
    // console.log(
    //   `cookieLookup: ${Object.keys(cookieLookup)} <--> ${Object.values(
    //     cookieLookup
    //   )}\n=> ${Object.entries(cookieLookup)}`
    // );

    // console.log(`firstname in cookie-lookup: ${cookieLookup}`);

    for (const [key, val] of Object.entries(cookieLookup)) {
      console.log(`${key} -> ${val}`);
      console.log(key.length);
      // if (key === "firstname") setCurrentFirstname(val);
      // if (key === "lastname") setCurrentLastname(val);
      // if (key === "description") setCurrentDescription(val);
      // if (key === " firstname") console.log(`found firstname`);
      // if (key === " lastname") console.log(`found lastname`);
      // if (key === " description") console.log(`found description`);
    }

    // console.log(`fileteredCookiePath: ${fileredCookiePath}`);
    // const firstnameKeyValPair: string[] = fileredCookiePath[4].split("=");
    // console.log(firstnameKeyValPair);
    // const lastnameKeyValPair: string[] = fileredCookiePath[5].split("=");
    // console.log(lastnameKeyValPair);
    // const bioKeyValPair: string[] = fileredCookiePath[3].split("=");
    // console.log(bioKeyValPair);

    // setCurrentFirstname(firstnameKeyValPair[1]);
    // setCurrentLastname(lastnameKeyValPair[1]);
    // setCurrentDescription(bioKeyValPair[1]);
    setCurrentFirstname(cookieLookup[" firstname"]);
    setCurrentLastname(cookieLookup[" lastname"]);
    setCurrentDescription(cookieLookup[" description"]);
  }, []);

  React.useEffect(() => {
    console.log(
      `firstname in cookie: ${currentFirstname}\nlastname in cookie: ${currentLastname}\ndescription in cookie: ${currentDescription}`
    );
  }, []);

  return (
    <div id="right_side_card" className="flex flex-col justify-evenly">
      <div id="first_and_last_name" className="flex flex-row justify-evenly">
        <>
          <div
            className={`${!isChangingOnFirstname ? "mr-[2rem]" : "mr-[3rem]"}`}
          >
            <p className="flex flex-row">
              First name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-pencil-square desktop:ml-[0.69rem] cursor-pointer`}
                viewBox="0 0 16 16"
                onClick={() => setIsChangingOnFirstname(!isChangingOnFirstname)}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </p>
            {/* <input
              type="text"
              placeholder="Your first name"
              className="desktop:w-[12rem]"
              value={currentFirstname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstname(e.target.value);
              }}
            /> */}
            {isChangingOnFirstname ? (
              <>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="desktop:w-[10rem]"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstname(e.target.value);
                  }}
                />
              </>
            ) : (
              <>
                <p>{currentFirstname}</p>
              </>
            )}
          </div>
        </>

        <>
          <div>
            <p className="flex flex-row">
              Last name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-pencil-square desktop:ml-[0.69rem] cursor-pointer`}
                viewBox="0 0 16 16"
                onClick={() => setIsChangingOnLastname(!isChangingOnLastname)}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </p>
            {/* <input
              type="text"
              placeholder="Your first name"
              className="desktop:w-[12rem]"
              value={currentLastname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLastname(e.target.value);
              }}
            /> */}
            {isChangingOnLastname ? (
              <>
                <input
                  type="text"
                  placeholder="Your first name"
                  className="desktop:w-[10rem]"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLastname(e.target.value);
                  }}
                />
              </>
            ) : (
              <>
                <p>{currentLastname}</p>
              </>
            )}
          </div>
        </>
      </div>

      <div id="about" className="desktop:mt-[-5rem] desktop:ml-[1rem]">
        <>
          <div>
            <p className="flex flex-row">
              About you
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={`bi bi-pencil-square desktop:ml-[0.69rem] cursor-pointer`}
                viewBox="0 0 16 16"
                onClick={() => setIsChangingOnBio(!isChangingOnBio)}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </p>
            {isChangingOnBio ? (
              <>
                <textarea
                  id="description"
                  name=""
                  rows={4}
                  cols={50}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setDescription(e.target.value);
                  }}
                >
                  {currentDescription}
                </textarea>
              </>
            ) : (
              <>
                <p>
                  {!currentDescription || currentDescription == undefined ? (
                    "Let the other know about yourself ?"
                  ) : (
                    <p>{currentDescription}</p>
                  )}
                </p>
              </>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default RightSideProfileCard;
