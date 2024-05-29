"use client";
import React, { useState } from "react";
import { SongType } from "./UIController";

const MusicPlayer: React.FC<{ song: SongType | null }> = ({ song }) => {
  return (
    <div
      id="music_player"
      className="desktop:w-full desktop:h-full bg-neutral-100 desktop:mt-[10rem] flex flex-row justify-evenly"
    >
      {/* <h2>
        Playing : {song?.songName} by {song?.artist}
      </h2> */}
      <SongDetail songName={song?.songName} author={song?.artist} />
      <MusicPlayerOperator />
    </div>
  );
};

export default MusicPlayer;

const SongDetail: React.FC<{
  songName: string | any;
  author: string | any;
}> = ({ songName, author }) => {
  const [isLoved, setIsLoved] = useState(false);
  return (
    <div id="song_detail">
      <div id="song_name" className="desktop:text-[1rem] flex flex-row">
        {songName}
        <span
          className="desktop:ml-[0.4rem] desktop:mt-[0.3rem] cursor-pointer"
          onClick={() => setIsLoved(!isLoved)}
        >
          {isLoved ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          )}
        </span>
      </div>
      <div id="song_author" className="desktop:text-[0.8rem]">
        {author}
      </div>
    </div>
  );
};

const MusicPlayerOperator: React.FC = () => {
  return (
    <div>
      <audio controls>
        {/* <source src="../../../audio/Recording (2).m4a" /> */}
        <source src="../audio/Recording (2).m4a" />
      </audio>
    </div>
  );
};
