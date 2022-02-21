import React, { useEffect, useState, useRef } from "react";
import { Typography, Stack } from "@mui/material";
import { DiscoverLayout } from "./DiscoverLayout";


export function DiscoverUserGetter() {
  //return from fetch, array from profile docs
  const [userQueue, setUserQueue] = useState();
  //consume context and declare variables


  //ref for current index position, incremented by "swipe"
  const counterRef = useRef(0);

  //init user array, only rerenders when remove from front and add to back
  useEffect(() => {
    return getUsers();
  }, []);

  const getUsers = async () => {
    let users = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/discover/getQueue/"+localStorage.getItem('currentUserId'),
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    let returnedUsers = await users.json();
    if (returnedUsers) {
      setUserQueue(returnedUsers);
    }
  };


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

