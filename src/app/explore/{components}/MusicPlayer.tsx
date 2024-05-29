"use client";
import React, { useState } from "react";
import { SongType } from "./UIController";

const MusicPlayer: React.FC<{ song: SongType | null }> = ({ song }) => {
  return (
    <div
      id="music_player"
      className="desktop:w-full desktop:h-full bg-neutral-200"
    >
      <h2>
        Playing : {song?.songName} by {song?.artist}
      </h2>
    </div>
  );
};

export default MusicPlayer;
