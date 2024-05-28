import React from "react";
import SongUploader from "./{components}/SongUploader";

const page = () => {
  return (
    <main
      id="upload_page"
      className="desktop:w-[100%] desktop:h-[100%] flex justify-center items-center"
    >
      {/* Adding new song */}
      <SongUploader />
    </main>
  );
};

export default page;
