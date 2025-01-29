"use client";
import React, { useState, useEffect } from "react";
import LeftSideProfileCard from "./LeftSideProfileCard";
import RightSideProfileCard from "./RightSideProfileCard";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [userEmail, setUserEmail] = useState<string | any>(``);
  const [userFirstname, setUserFirstname] = useState<string>("");
  const [userLastname, setUserLastname] = useState<string>("");
  const [userDescription, setUserDescription] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    // setUserEmail(sessionStorage.getItem("email"));
    console.log(`userEmail: ${userEmail}`);
    // console.log(
    //   `userFirstname: ${userFirstname}\nuserLastname: ${userLastname}\nuserDescription: ${userDescription}`
    // );
    console.log(`email in cookies: ${document.cookie}`);
    let filteredPaths = document.cookie.split(";");
    console.log(filteredPaths);
    let emailFromFilteredPaths = filteredPaths[0].split("=");
    console.log(emailFromFilteredPaths);
    setUserEmail(emailFromFilteredPaths[1]);
  }, []);

  return (
    <div
      id="card"
      className="bg-gray-200 desktop:w-[666px] desktop:h-[400px] flex flex-row justify-evenly"
    >
      <LeftSideProfileCard />

      <RightSideProfileCard
        firstname={userFirstname}
        setFirstname={setUserFirstname}
        lastname={userLastname}
        setLastname={setUserLastname}
        description={userDescription}
        setDescription={setUserDescription}
      />

      <div id="top-bar">
        <div
          id="save"
          className="desktop:mt-[0.5rem] desktop:mr-[0.4rem]"
          title="Save"
        >
          <button
            onClick={() => {
              console.log(
                `userFirstname: ${userFirstname}\nuserLastname: ${userLastname}\nuserDescription: ${userDescription}`
              );
              document.cookie = `firstname=${userFirstname}; expires=${new Date(
                2025,
                0,
                1
              ).toUTCString()}`;
              document.cookie = `lastname=${userLastname}; expires=${new Date(
                2025,
                0,
                1
              ).toUTCString()}`;
              document.cookie = `description=${userDescription}; expires=${new Date(
                2025,
                0,
                1
              ).toUTCString()}`;
              // const appendedCookie = `firstname=${userFirstname};lastname=${userLastname};description=${userDescription}`;
              console.log(`cookie in Profile: ${document.cookie}`);

              router.push("/explore");

              // let currentCookie = document.cookie;
              // console.log(`currentCookie: ${currentCookie}`);
              // let res = currentCookie + appendedCookie;
              // console.log(`res: ${res}`);
              // document.cookie = res;
              // console.log(`cookie in profile: ${document.cookie}`);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-floppy"
              viewBox="0 0 16 16"
            >
              <path d="M11 2H9v3h2z" />
              <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
            </svg>
          </button>
        </div>

        <div
          id="log_out"
          className="desktop:mt-[0.5rem] desktop:mr-[0.4rem]"
          title="Log-out"
        >
          <button
            onClick={() => {
              document.cookie = `firstname=; Max-Age=0`;
              document.cookie = `lastname=; Max-Age=0`;
              document.cookie = `email=; Max-Age=0`;
              document.cookie = `description=; Max-Age=0`;

              router.push("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
