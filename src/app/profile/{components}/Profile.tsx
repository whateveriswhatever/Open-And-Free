"use client";
import React, { useState, useEffect } from "react";
import LeftSideProfileCard from "./LeftSideProfileCard";
import RightSideProfileCard from "./RightSideProfileCard";

const Profile = () => {
  const [userEmail, setUserEmail] = useState<string | any>(``);

  useEffect(() => {
    // setUserEmail(sessionStorage.getItem("email"));
    console.log(`userEmail: ${userEmail}`);
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
      {/* Profile
      <div>
        Email: <h2>{userEmail}</h2>
      </div> */}
      <LeftSideProfileCard />

      <RightSideProfileCard />
    </div>
  );
};

export default Profile;
