import { Paper } from "@mui/material";
import { AlbumContainer } from "./AlbumContainer";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useState } from "react";

export function DiscoverPaper({ handleSwipe, currentPosition, userQueue }) {
  const [startX, setStartX] = useState();

  function swipePoint(swipeX) {
    let direction;
    if (swipeX / startX > 1.5) {
      direction = "Right";
    }
    if (swipeX / startX < 0.5) {
      direction = "Left";
    }
    return leaveScreen(direction, swipeX);
  }

  function leaveScreen(direction, startPoint) {
    handleSwipe(direction);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentPosition}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, tween: 3 }}
          exit={{
            opacity: 0,
            duration: 1,
            transition: { easeOut: [0.9, 0.5, 0.3, 0.1] },
          }}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragStart={(event, info) => {
            setStartX(info.point.x);
          }}
          onDragEnd={(event, info) => {
            swipePoint(info.point.x);
          }}
          whileHover={{
            scale: 0.99,
          }}
        >
          <Paper
               elevation={16}
               sx={{
                zIndex: "8000",
                 marginTop: "1.5rem",
                 marginX: "1rem",
                 maxWidth: "80vw",
                 flexBasis: "auto"}}>
            <AlbumContainer
          
              currentPosition={currentPosition}
              userQueue={userQueue}
            />
            </Paper>
  </motion.div>

      </AnimatePresence>
    </>
  );
}
