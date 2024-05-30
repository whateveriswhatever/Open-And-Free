"use client";
import React, { useState, useEffect } from "react";
import { SongType } from "./UIController";
import { musicFileDatabase } from "@/app/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const MusicPlayer: React.FC<{ song: SongType | any }> = ({ song }) => {
  const [identifiedSong, setIdentifiedSong] = useState<{
    authorName: string;
    fileURL: string;
    songName: string;
  }>({
    authorName: "",
    fileURL: "",
    songName: "",
  });

  useEffect(() => {
    // console.log(`song's file URL : ${song?.fileURL}`);
    console.log(`song in MusicPlayer : ${song.songName}`);

    const fetchSongs = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(musicFileDatabase, "musicFiles")
        );

        const fetchedSongs: any = [];
        // const foundSong: any = [];

        querySnapshot.forEach((doc) => {
          // if (doc.data().songName === song.songName) {
          //   foundSong.push(doc.data());
          // }
          fetchedSongs.push(doc.data());
        });

        fetchedSongs.map((each: any) => {
          console.log(`song in MusicPlayer : ${each.songName}`);
          if (each.songName == song.songName) {
            console.log(`Found the matched song : `);
            console.log(
              `Name: ${each.songName}\nArtist: ${each.authorName}\nFile URL: ${each.fileURL}`
            );
            setIdentifiedSong(each);
          }
        });

        // setIdentifiedSong(foundSong);
        // console.log(`identifiedSong : ${identifiedSong}`);
      } catch (error) {
        console.error(`Failed when finding the matched song ----> ${error}`);
      } finally {
        console.log(`Done`);
      }
    };
    fetchSongs();
  }, [song]);

  useEffect(() => {
    console.log(`identifiedSong supervisor: ${identifiedSong.fileURL}`);
  }, [identifiedSong, setIdentifiedSong]);

  return (
    <div
      id="music_player"
      className="desktop:w-full desktop:h-full bg-neutral-100 desktop:mt-[4rem] flex flex-row justify-evenly"
    >
      {/* <h2>
        Playing : {song?.songName} by {song?.artist}
      </h2> */}
      <SongDetail songName={song?.songName} author={song?.artist} />
      <MusicPlayerOperator fileURL={identifiedSong?.fileURL} />
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
          onClick={() => {
            !isLoved
              ? console.log(`Loved the song : ${songName}`)
              : console.log(`Dislike the song : ${songName}`);
            setIsLoved(!isLoved);
          }}
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

const MusicPlayerOperator: React.FC<{ fileURL: string | undefined }> = ({
  fileURL,
}) => {
  return (
    <div
      id="palyer_operator"
      onClick={() => {
        console.log(`Clicked`);
      }}
    >
      <audio controls>
        {/* <source src="../../../audio/Recording (2).m4a" /> */}
        {fileURL ? (
          <source src={fileURL} type="audio/mpeg" />
        ) : (
          <p>No audio file available</p>
        )}
      </audio>
    </div>
  );
};
