"use client"
import React, { useEffect, useRef } from "react";
import Initial from "../../components/features/initial";
import Rvsp from "../../components/features/rvsp";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClicked,setIsClicked] = React.useState<boolean>(false);

   useEffect(() => {
    const startMusic = () => {
      audioRef.current?.play().catch(() => {});

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop preload="auto">
        <source src="/assets/bgm.MP3" type="audio/mpeg" />
      </audio>
      {isClicked ? <Rvsp/> : <Initial setIsClicked={setIsClicked}/>}
    </div>
  )
}
