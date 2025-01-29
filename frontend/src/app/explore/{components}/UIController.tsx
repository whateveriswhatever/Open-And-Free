"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { musicFileDatabase } from "@/app/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import AddingNewSong from "./AddingNewSong";
import MusicPlayer from "./MusicPlayer";
import FoundSongRes from "./FoundSongRes";

const UIController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<any>(null);
  return (
    <div id="ui_controller" className="w-[100%] h-[100%] flex flex-col">
      <UIHeader />
      <UIMain setCurrentSong={setCurrentSong} currentSong={currentSong} />
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
        className="desktop:w-[40px] desktop:h-[40px] border-2 border-slate-400 rounded-[1.2rem] desktop:mr-[3rem] cursor-pointer"
        onClick={() => {
          router.push("/profile");
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="default avatar"
          className="desktop:w-fit desktop:h-fit desktop:rounded-[1rem]"
        />
      </div>
    </>
  );
};

const SearchAndUpload: React.FC<{
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onValueChange: (newValue: boolean) => void;
  onSearch: (query: string) => void; // New prop for searching handling
}> = ({ isOpened, setIsOpened, onValueChange, onSearch }) => {
  // const [isOpened, setIsOpened] = useState(false);
  const [searchingInput, setSearchingInput] = useState<string>("");

  const router = useRouter();

  // const addNewMusicFile = async (
  //   songName: string,
  //   authorName: string,
  //   mp3_4File: any
  // ): Promise<any> => {
  //   try {
  //     const docRef = await addDoc(collection(musicFileDatabase, "musicFiles"), {
  //       songName: songName,
  //       authorName: authorName,
  //       musicFile: mp3_4File,
  //       playedTimes: 0,
  //     });
  //     console.log(`Document was written with ID: ${docRef.id}`);
  //     return true;
  //   } catch (error) {
  //     console.error(`Failed when adding new docment ${error}`);
  //     return false;
  //   }
  // };

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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchingInput(e.target.value);
                    onSearch(e.target.value); // Call onSearch with the input value
                  }}
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

const UIMain: React.FC<{
  currentSong: SongType | null;
  setCurrentSong: (song: SongType) => void;
}> = ({ currentSong, setCurrentSong }) => {
  const [isAddingNewSongWindowOpened, setIsAddingNewSongWindowOpened] =
    useState(false);

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    console.log(`isAddingNewSongWindowOpened : ${isAddingNewSongWindowOpened}`);
  }, [isAddingNewSongWindowOpened]);

  useEffect(() => {
    console.log(`song : ${currentSong}`);
  }, []);

  return (
    <>
      <div
        id="ui_main"
        className="w-[100%] desktop:h-[666px] overflow-y-scroll"
      >
        <SearchAndUpload
          isOpened={isAddingNewSongWindowOpened}
          setIsOpened={setIsAddingNewSongWindowOpened}
          onValueChange={(newValue: boolean) =>
            setIsAddingNewSongWindowOpened(newValue)
          }
          onSearch={setSearchQuery} // Set the search query state
        />
        {isAddingNewSongWindowOpened ? <div>Hello</div> : <></>}
        <SongController
          isTheAddingWindowOpening={isAddingNewSongWindowOpened}
          setCurrentSong={setCurrentSong}
          // setIsAddingNewSongWindowOpened={setIsAddingNewSongWindowOpened}
          searchQuery={searchQuery} // Pass the search query to SongController
        />
        {currentSong && <MusicPlayer song={currentSong} />}
      </div>
    </>
  );
};

const SongController: React.FC<{
  isTheAddingWindowOpening: boolean;
  setCurrentSong: (song: SongType) => void;
  searchQuery: string; // Accept search query as a prop
}> = ({ isTheAddingWindowOpening, setCurrentSong, searchQuery }) => {
  const [isClickedReleased, setIsClickedReleased] = useState(false);
  const [isClickedUpcomming, setIsClickedUpcomming] = useState(true);
  // const [isTheAddingWindowOpeneing, setIsAddingNewSongWindowOpened] = useState(false);
  const [songs, setSongs] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSong = async (): Promise<void> => {
      setIsLoading(true);

      try {
        let searchingQuery;
        if (searchQuery) {
          searchingQuery = query(
            collection(musicFileDatabase, "musicFiles"),
            where("songName", ">=", searchQuery),
            where("songName", "<=", `${searchQuery}\uf8ff`)
          );
        } else {
          searchingQuery = collection(musicFileDatabase, "musicFiles");
        }

        const querySnapshot = await getDocs(searchingQuery);

        const fetchedSongs: any[] = [];

        querySnapshot.forEach((doc) => {
          fetchedSongs.push(doc.data());
        });

        setSongs(fetchedSongs);
      } catch (error) {
        console.error(`Failed when fetching songs ----> ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSong();
  }, [searchQuery]);

  useEffect(() => {
    console.log(`songs : ${songs}`);
    console.log("All available songs : ");
    songs.map((song: any) => {
      console.log(song?.authorName);
      console.log(song?.songName);
      console.log(song?.fileURL);
      console.log(song?.totalPlayedTimes);
      console.log(song?.addedDate.toDate().toUTCString().toString());
    });
    console.log(`isLoading : ${isLoading}`);
  }, [songs, setSongs]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            <div id="songs_collection" className="w-[100%] overflow-y-auto">
              <table className="desktop:w-[100%] overflow-y-auto">
                <thead>
                  <tr className="desktop:text-[0.7rem] text-slate-400">
                    <th>Name</th>
                    <th>Streams</th>
                    {/* <th>Listeners</th> */}
                    {/* <th>Saves</th> */}
                    <th>Added date</th>
                  </tr>
                </thead>

                <tbody>
                  {songs.map((song: any) => (
                    <TableRow
                      artist={song.authorName}
                      songName={song.songName}
                      streamViews={song.totalPlayedTimes}
                      setCurrentSong={setCurrentSong}
                      addedDate={song.addedDate
                        .toDate()
                        .toUTCString()
                        .toString()}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </>
    </>
  );
};

export type SongType = {
  // imgSrc: string;
  artist: string | null;
  songName: string | null;
  totalPlayedTimes?: number | any;
  addedDate?: string | any;
  fileURL?: any;
};

type TableRowType = {
  // imgSrc: string;
  artist: string;
  songName: string;
  streamViews: number | any;
  addedDate?: string | any;
};

const Song: React.FC<
  SongType & {
    setCurrentSong: (song: SongType) => void;
  }
> = ({ artist, songName, setCurrentSong }) => {
  const [authorLink, setAuthorLink] = useState("");

  const router = useRouter();

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
            <div
              id="song_name"
              className="cursor-pointer"
              onClick={() => {
                // router.push(`/songs/${songName}`);
                setCurrentSong({ artist, songName }); // Update the current song
              }}
            >
              {songName}
            </div>
            <div
              id="song_artist"
              className="flex desktop:text-[0.9rem] text-slate-500"
            >
              <a href={`https://google.com?search=${artist}`}>{artist}</a>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

const TableRow: React.FC<
  TableRowType & {
    setCurrentSong: (song: SongType) => void;
  }
> = ({
  // imgSrc,
  artist,
  songName,
  addedDate,
  streamViews,
  setCurrentSong,
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
            // fileURL={}
            setCurrentSong={setCurrentSong}
            // playedTimes={streamViews}
          />
        </td>
        <td>{streamViews}</td>
        <td>{addedDate}</td>
      </tr>
    </>
  );
};
