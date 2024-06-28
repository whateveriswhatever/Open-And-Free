"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { musicFileDatabase, storage } from "@/app/firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";

const SongUploader = () => {
  return (
    <div
      id="uploader"
      className="bg-stone-400 desktop:w-[800px] desktop:h-[600px] flex flex-col justify-center items-center"
    >
      <>
        <UploadForm />
      </>
    </div>
  );
};

export default SongUploader;

const UploadForm: React.FC = () => {
  const [songName, setSongName] = useState("");
  const [authorName, setAuthorName] = React.useState("");
  const [msg, setMsg] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const router = useRouter();

  React.useEffect(() => {
    if (typeof window === "undefined") {
      // Server-side, do nothing.
      return;
    }

    // Client-side only code here
  }, []);

  const addNewMusicFile = async (
    songName: string,
    authorName: string,
    mp3_4File: File
  ): Promise<any> => {
    if (!mp3_4File) {
      setMsg("No file was selected!");
      return;
    }

    const storageRef = ref(storage, `music/${mp3_4File.name}`);

    try {
      await uploadBytes(storageRef, mp3_4File);
      const fileURL = await getDownloadURL(storageRef);

      await addDoc(collection(musicFileDatabase, "musicFiles"), {
        songName,
        authorName,
        fileURL,
      });

      console.log("Document successfully written!");
      setMsg("File uploaded successfully");

      // if (msg === "File uploaded successfully") {
      //   router.push("/explore");
      // }
      router.push("/explore");
    } catch (error) {
      console.error(`Failed when adding new docment ${error}`);
      // return false;
      setMsg("Error when uploading file");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMediaFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <form
        id="form"
        className="desktop:h-[180px] flex flex-col justify-between"
        onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          // const response = await addNewMusicFile();
          if (mediaFile) {
            await addNewMusicFile(songName, authorName, mediaFile);
          }
        }}
      >
        <div id="song_name">
          <span className="flex flex-row">
            <h4 className="desktop:mr-[1rem]">Song name:</h4>
            <input
              type="text"
              placeholder="Enter song name"
              name="song_name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSongName(e.target.value);
              }}
            />
          </span>
        </div>

        <div id="song_author">
          <span className="flex flex-row">
            <h4 className="desktop:mr-[1rem]">Author name:</h4>
            <input
              type="text"
              placeholder="Enter author name"
              name="author_name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAuthorName(e.target.value)
              }
            />
          </span>
        </div>

        <div id="media_file">
          <span className="flex flex-row">
            <h4 className="desktop:mr-[1rem]">Media file (mp3, mp4):</h4>
            <input type="file" name="media_file" onChange={handleFileChange} />
          </span>
        </div>

        <div
          id="submit_section"
          className="desktop:w-[4rem] desktop:h-[2rem] bg-orange-200 flex justify-center"
        >
          <button type="submit">Upload</button>

          <>{msg && <p>{msg}</p>}</>
        </div>
      </form>
    </div>
  );
};
