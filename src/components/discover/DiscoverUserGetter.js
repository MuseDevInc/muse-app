import React, { useEffect, useState, useRef, useContext } from "react";
import { DiscoverPaper } from "./DiscoverPaper";

import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { PlaybackControls } from "./PlaybackControls";
import MatchActionButtons from "./MatchActionButtons";
import NextAvatar from "./NextAvatar";
import { DiscoverLayout } from "./DiscoverLayout";
import dummyData from "./dummyData/dummyData.json";
import { UserContext } from "../../App";

function DiscoverUserGetter() {
  //return from fetch, array from profile docs
  const [userQueue, setUserQueue] = useState();
  //consume context and declare variables
  const currentUser = useContext(UserContext);
  const currentId = currentUser.currentUserId;

  //ref for current index position, incremented by "swipe"
  const counterRef = useRef(0);

  //init user array, only rerenders when remove from front and add to back
  useEffect(() => {
    return currentId && userQueue ? null : getUsers();
  }, []);

  const getUsers = async () => {
    let users = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/discover/getQueue",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    let returnedUsers = await users.json();
    if (returnedUsers) {
      console.log(returnedUsers);
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
        {userQueue ? (
          <DiscoverLayout userQueue={userQueue} qCounter={counterRef} />
        ) : (
          <Typography variant="h1">Loading</Typography>
        )}
      </Stack>
    </>
  );
}

export default DiscoverUserGetter;
