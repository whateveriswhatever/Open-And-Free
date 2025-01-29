import React from "react";

const page = ({ params }: { params: { songName: string } }) => {
  return (
    <div>
      <h2>{params.songName}</h2>
    </div>
  );
};

export default page;
