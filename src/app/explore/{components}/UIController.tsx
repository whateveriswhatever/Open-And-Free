"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { musicFileDatabase } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import AddingNewSong from "./AddingNewSong";

const UIController = () => {
  return (
    <div id="ui_controller" className="w-[100%] h-[100%] flex flex-col">
      <UIHeader />
      <UIMain />
    </div>
  );
};

export default UIController;

const UIHeader: React.FC = () => (
  <>
    <div
      id="ui_header"
      className="w-[100%] desktop:h-[80px] flex flex-row justify-end items-center"
    >
      <UserAccount />
    </div>
  </>
);

const UserAccount: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div
        id="user_account"
        className="desktop:w-[40px] desktop:h-[40px] border-2 border-slate-400 rounded-[1.2rem] desktop:mr-[3rem]"
        onClick={() => {
          router.push("/profile");
        }}
      ></div>
    </>
  );
};

const SearchAndUpload: React.FC<{
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onValueChange: (newValue: boolean) => void;
}> = ({ isOpened, setIsOpened, onValueChange }) => {
  // const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  const addNewMusicFile = async (
    songName: string,
    authorName: string,
    mp3_4File: any
  ): Promise<any> => {
    try {
      const docRef = await addDoc(collection(musicFileDatabase, "messages"), {
        songName: songName,
        authorName: authorName,
        musicFile: mp3_4File,
      });
      console.log(`Document was written with ID: ${docRef.id}`);
      return true;
    } catch (error) {
      console.error(`Failed when adding new docment ${error}`);
      return false;
    }
  };

  return (
    <>
      <div
        id="search_and_upload"
        className="w-[100%] flex flex-row justify-around"
      >
        <div id="heading">
          <h2 className="font-bold desktop:text-[2.2rem]">My Library</h2>
        </div>

        <div
          id="search_and_upload_sections"
          className="desktop:w-[400px] flex flex-row justify-evenly items-center desktop:h-[69px]"
        >
          <>
            <div
              id="searcher"
              className="border-[2px] rounded-[1.4rem] border-gray-200 flex flex-row justify-between items-center desktop:w-[38%] desktop:h-[48px]"
            >
              <div className="desktop:w-[40%] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search library"
                  className="desktop:w-[90%] desktop:h-[38px] focus:outline-none desktop:text-[0.9rem]"
                />
              </div>
            </div>
          </>
          <>
            <div
              id="uploader"
              className="border-[1px] rounded-[1.4rem] border-gray-200 flex flex-row justify-evenly items-center desktop:w-[38%] desktop:h-[48px] font-bold bg-pink-200"
              onClick={() => {
                setIsOpened(!isOpened);
                onValueChange(isOpened); // Updating the parent's state
                console.log(`Is opened : ${isOpened}`);
                router.push("/songs/upload");
              }}
            >
              <div className="desktop:w-[40%] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </div>

              <div>
                <button className="desktop:text-[0.9rem]">Upload music</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

const UIMain: React.FC = () => {
  const [isAddingNewSongWindowOpened, setIsAddingNewSongWindowOpened] =
    useState(false);

  useEffect(() => {
    console.log(`isAddingNewSongWindowOpened : ${isAddingNewSongWindowOpened}`);
  }, [isAddingNewSongWindowOpened]);

  return (
    <>
      <div id="ui_main" className="w-[100%] desktop:h-[100%]">
        <SearchAndUpload
          isOpened={isAddingNewSongWindowOpened}
          setIsOpened={setIsAddingNewSongWindowOpened}
          onValueChange={(newValue: boolean) =>
            setIsAddingNewSongWindowOpened(newValue)
          }
        />
        {isAddingNewSongWindowOpened ? <div>Hello</div> : <></>}
        <SongController
          isTheAddingWindowOpening={isAddingNewSongWindowOpened}
          // setIsAddingNewSongWindowOpened={setIsAddingNewSongWindowOpened}
        />
      </div>
    </>
  );
};

const SongController: React.FC<{
  isTheAddingWindowOpening: boolean;
}> = ({ isTheAddingWindowOpening }) => {
  const [isClickedReleased, setIsClickedReleased] = useState(false);
  const [isClickedUpcomming, setIsClickedUpcomming] = useState(false);
  // const [isTheAddingWindowOpeneing, setIsAddingNewSongWindowOpened] = useState(false);

  return (
    <>
      <>
        <div id="songs_controller" className="w-[100%] desktop:mt-[2rem]">
          <>
            <div
              id="released_and_upcoming"
              className="desktop:w-[25%] flex flex-row justify-around desktop:ml-[3rem]"
            >
              <>
                <div
                  id="released"
                  className={`${
                    isClickedReleased
                      ? "text-black border-b-[2px] border-pink-300"
                      : "text-slate-400"
                  } font-bold`}
                  onClick={() => {
                    setIsClickedReleased(!isClickedReleased);
                    // console.log(
                    //   `isTheAddingNewSongWindowOpened: ${isTheAddingWindowOpening}`
                    // );
                  }}
                >
                  <button>Released</button>
                </div>
              </>
              <>
                <div
                  id="upcoming"
                  className={`${
                    isClickedUpcomming
                      ? "text-black border-b-[2px] border-pink-300"
                      : "text-slate-400"
                  } font-bold`}
                  onClick={() => {
                    setIsClickedUpcomming(!isClickedUpcomming);
                  }}
                >
                  <button>Upcoming</button>
                </div>
              </>
            </div>
          </>
          <br />
          <br />
          {isTheAddingWindowOpening ? <div>Hello</div> : <></>}
          <>
            <div id="songs_collection" className="w-[100%]">
              <table className="desktop:w-[100%]">
                <thead>
                  <tr className="desktop:text-[0.7rem] text-slate-400">
                    <th>Name</th>
                    <th>Streams</th>
                    <th>Listeners</th>
                    <th>Saves</th>
                    <th>Release date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="text-center">
                    <td>
                      <Song
                        // imgSrc="https://th.bing.com/th/id/OIP.yl1i3fg_sD1sU82ZHLG7SwAAAA?rs=1&pid=ImgDetMain"
                        artist="Lana Del Rey"
                        songName="Summertime Sadness"
                      />
                    </td>
                    <td>200K</td>
                    <td>12M</td>
                    <td>4M</td>
                    <td>23/12/2006</td>
                  </tr>

                  {/* <br /> */}

                  <TableRow
                    // imgSrc="https://th.bing.com/th/id/OIP.jU3Rq0KBJnjBTBrLQjcNMwAAAA?rs=1&pid=ImgDetMain"
                    artist="Munn"
                    songName="can you hear me?"
                    streamViews="169K"
                    listenerViews="1.2M"
                    saveViews="423K"
                    releasedDate="11-11-2020"
                  />

                  {/* <br /> */}

                  <TableRow
                    // imgSrc="https://i.scdn.co/image/ab67616d0000b2732abff3da1b5a18689e7a5a5b"
                    artist="Tom Rosenthal"
                    songName="Have We Met Before?"
                    streamViews="230K"
                    listenerViews="1.1M"
                    saveViews="671K"
                    releasedDate="01-10-2019"
                  />

                  <TableRow
                    // imgSrc="https://seeded-session-images.scdn.co/v1/img/track/1BxfuPKGuaTgP7aM0Bbdwr/en"
                    artist="Taylor Swift"
                    songName="Cruel Summer"
                    streamViews="1.8M"
                    listenerViews="2.3M"
                    saveViews="981K"
                    releasedDate="13-13-2021"
                  />
                </tbody>
              </table>
            </div>
          </>
        </div>
      </>
    </>
  );
};

type SongType = {
  // imgSrc: string;
  artist: string;
  songName: string;
};

type TableRowType = {
  // imgSrc: string;
  artist: string;
  songName: string;
  streamViews: string;
  listenerViews: string;
  saveViews: string;
  releasedDate: string;
};

const Song: React.FC<SongType> = ({ artist, songName }) => {
  return (
    <>
      <div id="song" className="flex justify-center items-center">
        <>
          <div id="song_image" className="desktop:mr-[1rem]">
            {/* <Image
              src={imgSrc}
              alt="song image"
              width={40}
              height={40}
              className="desktop:w-[60px] desktop:h-[60px] desktop:rounded-[1rem]"
            /> */}
          </div>
        </>

        <>
          <div id="song_detail" className="flex flex-col justify-center">
            <div id="song_name">{songName}</div>
            <div
              id="song_artist"
              className="flex desktop:text-[0.9rem] text-slate-500"
            >
              {artist}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

const TableRow: React.FC<TableRowType> = ({
  // imgSrc,
  artist,
  songName,
  streamViews,
  listenerViews,
  saveViews,
  releasedDate,
}) => {
  return (
    <>
      <br />
      <tr className="text-center">
        <td>
          <Song
            // imgSrc={`${imgSrc}`}
            artist={`${artist}`}
            songName={`${songName}`}
          />
        </td>
        <td>{streamViews}</td>
        <td>{listenerViews}</td>
        <td>{saveViews}</td>
        <td>{releasedDate}</td>
      </tr>
    </>
  );
};
