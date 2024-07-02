"use client";
import React, { useState, useEffect } from "react";
import { SongType } from "./UIController";
import { musicFileDatabase, storage } from "@/app/firebaseConfig";
import {
  getDocs,
  collection,
  doc,
  deleteDoc,
  increment,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { useRouter } from "next/navigation";

const MusicPlayer: React.FC<{ song: SongType | any }> = ({ song }) => {
  const [identifiedSong, setIdentifiedSong] = useState<{
    id: string;
    authorName: string;
    fileURL: string;
    songName: string;
    totalPlayedTimes?: number | any;
  }>({
    id: "",
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
          fetchedSongs.push({
            songName: doc.data().songName,
            fileURL: doc.data().fileURL,
            authorName: doc.data().authorName,
            id: doc.id,
          });
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
        // Suppose if a song was found and being reserved inner the fetchedSongs array then it would definitely be located solely inner the array
        // In the worst case, even if there are more than one song has been reserved inner the array then the song we are playing must be laid on the 0 index
        const songRef = collection(musicFileDatabase, "musicFiles");

        // Fetch the document for the song
        const songQuery = query(
          songRef,
          where("songName", "==", identifiedSong["songName"])
        );
        const querySnapshotForSongQuery: any = await getDocs(songQuery);

        if (!querySnapshotForSongQuery["empty"]) {
          const songDoc = querySnapshotForSongQuery.docs[0]; // Assuming song names are unique
          const songDocRef = songDoc.ref;

          // Increment the totalPlayedTimes field by 1
          await updateDoc(songDocRef, {
            totalPlayedTimes: increment(1),
          });

          console.log(`Updated play count for ${song["name"]}`);
        }
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

      <DiscardSongButton
        currentSongID={identifiedSong?.id}
        currentFileURL={identifiedSong?.fileURL}
      />
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
          className="desktop:ml-[1rem] desktop:mt-[0.8rem] cursor-pointer"
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
              className="bi bi-heart-fill "
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
      <audio controls onClick={() => console.log(`Played the song`)}>
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

const DiscardSongButton: React.FC<{
  currentSongID: string;
  currentFileURL: string;
}> = ({ currentSongID, currentFileURL }) => {
  // find the Song's ID via song's name
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  const deletingSongHandler = async (
    songID: string,
    fileURL: string
  ): Promise<void> => {
    console.log(`currentSongID : ${currentSongID}`);
    try {
      // Delete song under the document format inner the Firebase Firestore
      await deleteDoc(doc(musicFileDatabase, "musicFiles", songID));
      console.log(`Document with ID ${currentSongID} erased from firestore`);

      // Get reference to the file in Firebase Storage
      const audioFileRef = ref(storage, currentFileURL);

      // Erase file from Firebase storage
      await deleteObject(audioFileRef);
      console.log(`Audio file at ${fileURL} deleted from the Firebase Storage`);
      router.push("/explore");
    } catch (error) {
      console.error(
        `Failed when deleting the given song ${currentSongID}\n----> ${error}`
      );
    }
  };

  const handleDeleting = async () => {
    console.log(`Discarding the song with ID : ${currentSongID}`);
    await deletingSongHandler(currentSongID, currentFileURL);
    router.push("/explore");
  };

  return (
    <div
      id="remove_song"
      className="desktop:h-[50px] flex items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDeleting}
    >
      <span className="desktop:text-[0.69rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-trash3 desktop:w-[12px] desktop:h-[12px] ${
            isHovered ? "text-red-600" : ""
          }`}
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        </svg>
      </span>
    </div>
  );
};
