import React from "react";
import { DiscoverPaper } from "./DiscoverPaper";

import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";
function DiscoverUserGetter() {
  //swipe handler
  //fetch
  //userQueue
  //state management

  return (
    <>
      <Stack alignItems="center">
        <Typography
          variant="h3"
          elevation={24}
          marginTop="2rem"
          sx={{ color: "black" }}
        >
          Christian
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              console.log("thumbs down");
            }}
          >
            <ThumbDownOffAltRounded sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <DiscoverPaper />
          <IconButton
            onClick={() => {
              console.log("thumbs up");
            }}
          >
            <ThumbUp sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <MatchActionButtons />
        </Box>
        {/*  Replace stack with MUI AvatarGroup, gen NextAvatars from queue */}
        <Stack flexDirection="row" marginTop="2rem" columnGap="3rem">
          <NextAvatar />
          <NextAvatar />
          <NextAvatar />
        </Stack>
      </Stack>
    </>
  );
}

export default DiscoverUserGetter;
