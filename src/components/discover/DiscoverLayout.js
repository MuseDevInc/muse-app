import React, { useState, useEffect, useRef } from "react";
import { DiscoverPaper } from "./DiscoverPaper";
import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";
import MusicPlayer from "../user/MusicPlayer";

export function DiscoverLayout({ userQueue, qCounter }) {
  //seeing if state update triggers render in a consistent way
  const [count, setCount] = useState();
  const [match, setMatch] = useState();
  console.log(qCounter);

  //handle user action

  function handleSwipe(swipe) {
    if (swipe === "right") {
      //add id to current user's swiperight array
      console.log("swipe right on" + userQueue[qCounter.current]._id);
      //we will check for current User's  UserId in other user's swiperight array
      checkMatch();
    }
    if (swipe === "left") {
      //add id to current user's swipeleft array
      console.log("swipe left on" + userQueue[qCounter.current]._id);
      //if swipe === left, advance through the queue
      advanceQ();
    }
  }

  function checkMatch() {
    //this will be to check other user's swiperight array for currentUser's id.
    //if match, set match to true --> alert --> render FAB or change styling or open FAB
    userQueue[qCounter.current].swiperight ? setMatch(true) : advanceQ();
    //includes ^ 
    //Need to determine how we are advancing queue, because we don't want to prevent user from interacting with match prematurely. User input should be required to advance queue after match notification.
    //FAB buttons should receive all necessary props to render
  }
 
      
  
  function advanceQ() {
    //update ref
    qCounter.current = qCounter.current + 1;
    //update state to trigger and sync rerender w/ change of ref.current value
    count !== qCounter.current
      ? setCount(qCounter.current)
      : console.log(count);
    //reset match state
    setMatch(false);
  }

  /* 
    function handleSwipe () { 
        advanceQ()
    }
     */

  return (
    <>
      <Typography
        variant="h3"
        elevation={24}
        marginTop="2rem"
        sx={{ color: "black" }}
      >
        {userQueue[qCounter.current].aboutMe}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => {
            handleSwipe("left");
          }}
        >
          <ThumbDownOffAltRounded sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <DiscoverPaper currentPosition={qCounter.current} userQueue={userQueue} />
        <IconButton
          onClick={() => {
            handleSwipe("right");
          }}
        >
          <ThumbUp sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <MatchActionButtons
          currentUser={qCounter.current}
          userQueue={userQueue}
        />
      </Box>
      

     {/*  <Stack flexDirection="row" marginTop="2rem" columnGap="3rem">
        <NextAvatar />
        <NextAvatar />
        <NextAvatar />
      </Stack> */}
    </>
  );
}
