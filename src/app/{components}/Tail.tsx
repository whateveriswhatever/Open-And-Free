import React from "react";
import Image from "next/image";

const Tail = () => {
  return (
    <div className="w-full phone:mt-[2rem]">
      <TailNav />
      {/* <TrendingTrackList /> */}
      <div className="w-full flex justify-center">
        <TrendingTrackList />
      </div>
    </div>
  );
};

export default Tail;

const TailNav: React.FC = () => {
  return (
    <div
      id="nav-tail"
      //   style={{
      //     display: "flex",
      //     flexDirection: "row",
      //     justifyContent: "space-around",
      //   }}
      className="w-full flex flex-row justify-around"
    >
      <div
        className="text-pink-800  font-bold dekstop:text-[2rem] phone:text-[1rem]"
        // style={{ fontSize: "1.2rem" }}
      >
        Trending packs
      </div>
      <div className="inline-block">
        <span>
          <p className="desktop:text-[1rem] phone:text-[0.9rem]">View more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

// const TrendingList = [
//   {
//     packNames: "House Grooves",
//     genre: ["House", "Pop"],
//     img: "",
//   },
//   {
//     packNames: "Bedroom Beats",
//     genre: ["Rap", "Pop"],
//     img: "",
//   },
//   {
//     packNames: "Haze Etnica",
//     genre: ["Experimental"],
//     img: "",
//   },
//   {
//     packNames: "Synthetic Beats",
//     genre: ["Drill", "Trap"],
//     img: "",
//   },
//   {
//     packNames: "House Grooves",
//     genre: ["House", "Pop"],
//     img: "",
//   },
//   {
//     packNames: "Night Pop",
//     genre: ["Pop"],
//     img: "",
//   },
// ];

type TrackType = {
  // key: Number | any;
  trackName: String;
  trackGenre: String;
  // trackImg: {
  //   src: String;
  //   width: Number;
  //   height: Number;
  // };
  trackImg: String;
};

const TrendingTrackList: React.FC = () => {
  return (
    <>
      <div
        id="trending_track_list"
        className="w-full flex flex-row justify-center desktop:gap-[3rem] phone:gap-[0.2rem] phone:mt-[3rem]"
        // style={{ justifyContent: "space-evenly" }}
      >
        <Track
          trackName="House Grooves"
          trackGenre={"House, Pop"}
          trackImg={
            "https://th.bing.com/th/id/R.f0cb1f0e23d4997798f341fc61e93d8d?rik=TGlEPeAGqIFVCQ&riu=http%3a%2f%2finmusiccd.com%2fuploads%2fposts%2f2018-10%2f1540747912_00-va-funky_disco_house_grooves_vol_13-2018.jpg&ehk=9YjHHLUwJzBvsHiVLoDruk5HuIA6TneCpgQBjcEp0TI%3d&risl=&pid=ImgRaw&r=0"
          }
          // trackImg={{
          //   src: "https://th.bing.com/th/id/R.f0cb1f0e23d4997798f341fc61e93d8d?rik=TGlEPeAGqIFVCQ&riu=http%3a%2f%2finmusiccd.com%2fuploads%2fposts%2f2018-10%2f1540747912_00-va-funky_disco_house_grooves_vol_13-2018.jpg&ehk=9YjHHLUwJzBvsHiVLoDruk5HuIA6TneCpgQBjcEp0TI%3d&risl=&pid=ImgRaw&r=0",
          //   width: 120,
          //   height: 120,
          // }}
        />

        <Track
          trackName={"Bedroom Beats"}
          trackGenre={"Pop, Rap"}
          trackImg={
            "https://producersources.com/wp-content/uploads/2022/06/Bedroom-Beats-Soundset-Cover.jpeg"
          }
        />
        <Track
          trackName={"This is Taylor Swift"}
          trackGenre={"Pop"}
          trackImg={
            "https://th.bing.com/th/id/OIP.Icj0ZsxwrREwLIeTD72PkgHaHa?rs=1&pid=ImgDetMain"
          }
        />
        <Track
          trackName={"This is Lana Del Rey"}
          trackGenre={"Pop, Artist"}
          trackImg={
            "https://th.bing.com/th/id/R.916bb9f5de9a014e67c441ecf32395ec?rik=oK1PJNwV3Ll9XQ&pid=ImgRaw&r=0"
          }
        />
        <Track
          trackName={"Lana Del Rey Born To Die"}
          trackGenre={"Drill, Trap"}
          trackImg={
            "https://th.bing.com/th/id/OIP.Gc8QUY7aASRjVej8I-BpTAHaHa?rs=1&pid=ImgDetMain"
          }
        />
        <Track
          trackName={"1989"}
          trackGenre={"Experimental"}
          trackImg={
            "https://th.bing.com/th/id/R.5a0da58381ea7ff9c3a47de808c2649c?rik=VRjqOzQ63QkZ6g&riu=http%3a%2f%2fwww.educatepark.com%2fwp-content%2fuploads%2f2017%2f07%2fwelcome_to_new_york___taylor_swift__1989__by_sparkylightning3-d841974.png&ehk=TGKXFtq%2bNtjMWfwhJMdoIxGiOTS%2bVlbX54kGvD2eRtk%3d&risl=&pid=ImgRaw&r=0"
          }
        />
      </div>
    </>
  );
};

const Track: React.FC<TrackType> = ({ trackName, trackGenre, trackImg }) => {
  return (
    <>
      <div>
        <div id={`track_img`}>
          <img
            src={`${trackImg}`}
            alt="Track's image"
            width="120px"
            height="120px"
            className={`rounded-3xl phone:w-[50px] desktop:w-[120px] phone:h-[50px] desktop:h-[120px]`}
          />
          {/* <Image
            src={`${trackImg}`}
            alt="Track's image"
            width={120}
            height={120}
            className={`rounded-3xl phone:w-[50px] desktop:w-[120px] phone:h-[50px] desktop:h-[120px]`}
          /> */}
        </div>
        <div
          id="track_name"
          className={`desktop:text-[0.88rem] font-bold text-center ${
            trackName.length > 15
              ? "desktop:text-[0.8rem] phone:text-[0.6rem] desktop:w-[124px] phone:w-[70px]"
              : "desktop:text-[0.88rem] phone:text-[0.6rem] phone:w-[50px] desktop:w-full"
          }`}
          // style={{ fontSize: "0.9rem", width: `${trackNameTextWidth}` }}
        >
          {trackName}
        </div>
        <div
          id="track_genre"
          className={`desktop:text-[0.8rem] text-center phone:text-[0.7rem]`}
        >
          {trackGenre}
        </div>
      </div>
    </>
  );
};
