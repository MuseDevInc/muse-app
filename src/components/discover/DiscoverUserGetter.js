import React, { useEffect, useState, useRef} from "react";
import { DiscoverPaper } from "./DiscoverPaper";

import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";
import { DiscoverLayout } from "./DiscoverLayout";
import dummyData from "./dummyData/dummyData.json"

function DiscoverUserGetter() {
  //array of fetched userdata
  const [dummyArrayState, setDummyArrayState] = useState()
  const [userQueue, setUserQueue] = useState()
  //ref for current index position
  const counterRef = useRef(0)
  
  //init user array, only rerenders when remove from front and add to back
  useEffect(() => {
  return userQueue? null : getUsers()
  },[])

 /*  useEffect(() => {
    console.log(Object.entries(userQueue[0]))
  }, [userQueue])
 */
  function initDummyArray() { 
    let dummyArray = Array.from(dummyData)
    setDummyArrayState(dummyArray)
  }
  


  const getUsers = async() => { 
    let users = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/discover",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    let returnedUsers = await users.json();
    if (returnedUsers) {
      console.log(returnedUsers)
      // setDisplayProfile(profileToDisplay)
      setUserQueue(returnedUsers);
    }
  };
  

  //swipe handler
  //fetch
  //userQueue
  //state management


  //pass down userQueue to Layout so that it can provide to children
  return (
    <>
      <Stack alignItems="center">
      {userQueue?
       <DiscoverLayout userQueue={userQueue}  qCounter={counterRef}/>
        : <Typography variant="h1">Loading</Typography>}
      </Stack>
    </>
  );
}

export default DiscoverUserGetter;
