"use client";
import React, { Fragment, useRef, useState } from "react";
// import second from '../../public/assets/audio/cuoinhaudi.mp3'

import Image from "next/image";
// import { styMusicFloating } from "./styles";

function FloatingMusic() {
  const [play, setPlay] = useState(true);

  const audioRef = useRef<any>(null);

  const toggleMusic = () => {
    // const myAudio: any = document.getElementById("myAudio");
    // console.log("==myAudio", myAudio);

    if (play) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div className="absolute bottom-[15px] left-[20px] h-10 w-10 border-r-5">
        <audio
          ref={audioRef}
          loop
          className="hide"
          src={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"}
        ></audio>

        <div onClick={toggleMusic}>
          <Image
            src={
              play
                ? "/assets/icon/music-icon.png"
                : "/assets/icon/music-stop-icon.png"
            }
            fill
            style={{ objectFit: "cover" }}
            className="icon-music"
            alt="icon-music"
            title={`${play ? "Matikan Musik" : "Putar Musik"}`}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;
