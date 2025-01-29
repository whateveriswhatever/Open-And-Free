import React from "react";
import Image from "next/image";

// type UsernameType = {
//   firstname: string;
//   setFirstname: React.Dispatch<React.SetStateAction<string>>;
// };

const LeftSideProfileCard: React.FC = () => {
  return (
    <div
      id="left_side_card"
      className="desktop:h-[400px] flex flex-col items-center justify-center desktop:ml-[1.8rem]"
    >
      <div id="header" className="desktop:mb-[3rem]">
        <h2>User Information</h2>
      </div>

      <div id="default_profile_image">
        <Image
          src="https://th.bing.com/th/id/R.1048d71b039ca7283d87eec6a529b0a0?rik=0cMq4nxTScT%2bVg&riu=http%3a%2f%2fwww.sibberhuuske.nl%2fwp-content%2fuploads%2f2016%2f10%2fdefault-avatar.png&ehk=J%2bHgivvxUTYqjXIPA%2b2%2boM2IcVlwQoR7mjtdLTS2saQ%3d&risl=&pid=ImgRaw&r=0"
          alt="default user profile image"
          width="200"
          height="200"
          className="desktop:w-[144px] desktop:h-[144px]"
        />
      </div>
    </div>
  );
};

export default LeftSideProfileCard;
