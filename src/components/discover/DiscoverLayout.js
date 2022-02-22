import React, { useState, useEffect, useRef } from "react";
import { DiscoverPaper } from "./DiscoverPaper";
import { ThumbDownOffAltRounded, ThumbUp } from "@mui/icons-material";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import { MatchDialog } from "./MatchDialog";
import { AnimatePresence, motion } from "framer-motion";
export function DiscoverLayout({ userQueue, qCounter }) {
  const [count, setCount] = useState();
  const [match, setMatch] = useState();

  function handleSwipe(swipe) {
    pushId(swipe);
    if (swipe === "Right") {
      checkMatch();
    }
    if (swipe === "Left") {
      advanceQ();
    }
  }

  function pushId(swipe) {
    console.log("push id");
    let payload = {
      swipeDirection: swipe,
      swipedUser: userQueue[qCounter.current]._id,
    };
    fetch(process.env.REACT_APP_BACKEND_SERVER + "/muse/discover/swipe/"+localStorage.getItem('currentUserId'), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });
  }

  function createConversation(otherUserId) {
    fetch(process.env.REACT_APP_BACKEND_SERVER + "/conversation/"+localStorage.getItem('currentUserId'), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ otherUserId: otherUserId }),
    });
  }
  function checkMatch() {
    console.log("check match!");
    //this will be to check other user's swiperight array for currentUser's id.
    //if match, set match to true --> alert --> render FAB or change styling or open FAB
    const payload = {
      swipedUser: userQueue[qCounter.current]._id,
    };
    fetch(process.env.REACT_APP_BACKEND_SERVER + "/muse/discover/checkmatch/"+localStorage.getItem('currentUserId'), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 400) {
          console.log("error");
        }
        if (res === true) {
          createConversation(userQueue[qCounter.current].owner._id);
          return setMatch(true);
        }
        if (res === false) {
          return advanceQ();
        }
      });
  }

  function advanceQ() {
    console.log("advance!");
    //update ref
    qCounter.current = qCounter.current + 1;
    //update state to trigger and sync rerender w/ change of ref.current value
    //tested: the below is absolutely necessary!
    count !== qCounter.current
      ? setCount(qCounter.current)
      : console.log(count);
    //reset match state
    setMatch(false);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {qCounter.current === userQueue.length ? (
          <Box
            maxWidth="100vw"
            minHeight={"80vh"}
            flexBasis="auto"
            component={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Paper elevation={8} sx={{ borderRadius: "8rem", opacity: ".6" }}>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", marginTop: "30vh", padding: "1rem" }}
              >
                There is no one new to display.
              </Typography>
            </Paper>
          </Box>
        ) : (
          <>
            <Typography
              key={userQueue[qCounter.current].owner.username}
              component={motion.div}
              variant="h3"
              elevation={24}
              marginTop="2rem"
              sx={{ color: "black" }}
              initial={{ opacity: 0, y: -50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              {userQueue[qCounter.current].owner.username}
            </Typography>
            <MatchDialog
              match={match}
              setMatch={setMatch}
              advanceQ={advanceQ}
              userToMessage={userQueue[qCounter.current]}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DiscoverPaper
                handleSwipe={handleSwipe}
                currentPosition={qCounter.current}
                userQueue={userQueue}
              />
            </Box>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
