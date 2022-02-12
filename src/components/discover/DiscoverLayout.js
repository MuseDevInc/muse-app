import React, { useState, useEffect, useRef } from "react";
import { DiscoverPaper } from "./DiscoverPaper";
import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";

export function DiscoverLayout({userQueue, qCounter}) {
    //seeing if state update triggers render in a consistent way
    const [count, setCount] = useState()
    console.log(qCounter)

    function advanceQ (thumbs) {
        console.log(userQueue)
        console.log(qCounter)
        if (thumbs === "right") {
            console.log('swipe right on' + userQueue[qCounter.current].username)

        }  if (thumbs === "left") {
            console.log('swipe left on' + userQueue[qCounter.current].username)
        }
        qCounter.current = qCounter.current + 1 
        count !== qCounter.current? setCount(qCounter.current) : console.log(count)
             
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
         {userQueue[qCounter.current].username}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
            advanceQ('left');
            }}
          >
            <ThumbDownOffAltRounded sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <DiscoverPaper />
          <IconButton
            onClick={() => {
             advanceQ('right');
            }}
          >
            <ThumbUp sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <MatchActionButtons currentUser={qCounter.current} userQueue={userQueue}/>
        </Box>
        <Stack flexDirection="row" marginTop="2rem" columnGap="3rem">
          <NextAvatar />
          <NextAvatar />
          <NextAvatar />
        </Stack>
      
        </>
  )
}

