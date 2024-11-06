"use client";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const MusicPlayer: React.FC = () => {
  const [isPlay, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playMusic = () => {
    audioRef.current?.play().catch((error) => {
      console.log("Autoplay bị chặn bởi trình duyệt:", error);
    });
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  return (
    <div className={"fixed bottom-12 left-8 z-20 bg-transparent"}>
      <audio ref={audioRef} src="/assets/audio/cuoinhaudi.mp3" />
      <button
        onClick={() => {
          setPlay(!isPlay);
          if (isPlay) {
            pauseMusic();
            return;
          }
          playMusic();
        }}
      >
        <Image
          style={{
            objectFit: "cover",
            borderRadius: "50%",
          }}
          width={60}
          height={60}
          src={isPlay ? "/assets/pause.png" : "/assets/play.png"}
          alt="images"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
