import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiscoverPaper } from "./DiscoverPaper";
import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";
import MusicPlayer from "../user/MusicPlayer";

export function DiscoverLayout({ userQueue, qCounter }) {
  //seeing if state update triggers render in a consistent way
  const navigate = useNavigate()
  const [count, setCount] = useState();
  const [match, setMatch] = useState();

  console.log(qCounter);
  useEffect(()=>{
    console.log(userQueue.length + "is user queue length and counter is at " + qCounter)
  })

  //handle user action

  function handleSwipe(swipe) {
    pushId(swipe);
    if (swipe === "Right") {
      console.log("swipe right on" + userQueue[qCounter.current]._id);
      checkMatch();
    }
    if (swipe === "Left") {
      console.log("swipe left on" + userQueue[qCounter.current]._id);
      advanceQ();
    }
  }

  function pushId(swipe) {
    let payload = {
      swipeDirection: swipe,
      swipedUser: userQueue[qCounter.current]._id,
    };
    fetch(process.env.REACT_APP_BACKEND_SERVER + "/muse/discover/swipe", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });
  }

  function checkMatch() {
    //this will be to check other user's swiperight array for currentUser's id.
    //if match, set match to true --> alert --> render FAB or change styling or open FAB
    const payload = {
      swipedUser : userQueue[qCounter.current]._id
    }
    fetch(
      process.env.REACT_APP_BACKEND_SERVER +
        "/muse/discover/checkmatch/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload)
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === 400) {
            console.log("error");
          }
       if (res === true) {
         alert("match!")
         console.log("match")
         advanceQ()
       }
       if (res === false)
       console.log("not a match")
       advanceQ()
        })
    ;
    //Need to determine how we are advancing queue on match, because we don't want to prevent user from interacting with match prematurely. User input should be required to advance queue after match notification.
    //FAB buttons should receive all necessary props to render
  }

  function advanceQ() {
    qCounter.current === userQueue.length? navigate("/userprofile") : 
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
            handleSwipe("Left");
          }}
        >
          <ThumbDownOffAltRounded sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <DiscoverPaper
          currentPosition={qCounter.current}
          userQueue={userQueue}
        />
        <IconButton
          onClick={() => {
            handleSwipe("Right");
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
