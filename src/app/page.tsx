"use client"
import React from "react";
import Initial from "../../components/features/initial";
import Rvsp from "../../components/features/rvsp";

export default function Home() {
  const [isClicked,setIsClicked] = React.useState<boolean>(false);

  return (
    <div>
      {isClicked ? <Rvsp/> : <Initial setIsClicked={setIsClicked}/>}
    </div>
  )
}
