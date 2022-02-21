import { Paper } from "@mui/material";
import { AlbumContainer } from "./AlbumContainer";
import { SwipeMotion } from "../motions/SwipeMotion";
import {
  AnimatePresence,
  animationControls,
  motion,
  useAnimation,
  useMotionValue,
  useIsPresent
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function DiscoverPaper({ handleSwipe, currentPosition, userQueue }) {
  const albumRef = useRef();
  const [startX, setStartX] = useState();
  const controls = useAnimation();
  const [target, setTarget] = useState();
  const isPresent = useIsPresent()
  const [isShown, setIsShown] = useState(true)
  /* 
  useEffect(() => {
    console.log(startX)
  }) */


  useEffect(()=>{
    console.log(isPresent)
  controls.start({
    scale: 1,
    transition: {delay: 2, duration: 2}
  })
  }, [currentPosition])

  function swipePoint(swipeX) {
    console.log("yeeeeeeeeet");
    let direction;
    if (swipeX / startX > 2.5) {
      direction = "Right";
  /*     controls.start({
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      }) */
    }
    if (swipeX / startX < 0.4) {
      direction = "Left";

    }

    return leaveScreen(direction, swipeX);
  }

  function travelDistance(endPoint) {
    return endPoint * 2.2;
  }

  function leaveScreen(direction, startPoint) {
    console.log(direction);
    handleSwipe(direction);
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>

        <motion.div
     /*    animate={controls} */
           variants={{
             visible: { opacity: 1, scale: 1 },
             hidden: { opacity: 0, scale: 0 }
           }}

          initial={{opacity: 0}}
           animate={{opacity: 1}}
          

          key={currentPosition}

          transition={{delay: 1, duration: 1, tween: 3  }}
          exit={{ opacity: 0, duration: 1, transition: {easeOut: [.9, .5, .3, .1] }}}

          drag="x"
          dragConstraints={{
            left: 0,
            right: 0
          }}

          onDragStart={(event, info) => {
            setStartX(info.point.x);
          }}
          onDragEnd={(event, info) => {
            swipePoint(info.point.x);
          }}
          /*  onDrag={(event, info) => console.log(info.point.x, info.point.y, positionRef.current.parentNode.offsetWidth, )} */

     
          
    
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
