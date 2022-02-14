import { Typography, Paper, Stack } from "@mui/material";
import React, {useEffect, useContext} from "react";
import { NavBar } from "./navbar/NavBar";
import { Login } from "./formComponents/Login";
import { RegisterSession } from "./formComponents/RegisterSession";
import { DiscoverPaper } from "./discover/DiscoverPaper";
import { DiscoverContainer } from "./discover/DiscoverContainer";
import { PlaybackControls } from "./discover/PlaybackControls";
import { MuseWindow } from "./MuseWindow";

export function Main() {


  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  return (
    <div>
      <NavBar />
      <MuseWindow gradient={backGrad} />
    </div>
  );
}
