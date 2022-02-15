import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UndoIcon from "@mui/icons-material/Undo";
import { Create } from "@mui/icons-material";

const actions = [
  { icon: <RemoveRedEyeIcon />, name: "View" },
  { icon: <Create />, name: "Message" },
  { icon: <UndoIcon />, name: "Oopsies" },
];
export default function MatchActionButtons({ currentUser, userQueue }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [hidden, setHidden] = useState(true);
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  /*   const [matchUser, setMatchUser] = matchedUser */

  /* useEffect(() => {
    console.log(userQueue[currentUser])
  }) */

  useEffect(() => {
    if (userQueue) {
      if (userQueue[currentUser].swiperight === true) {
        console.log(
          userQueue[currentUser] + " and " + userQueue[currentUser].swiperight
        );
        setHidden(false);
      }
      if (userQueue[currentUser].swiperight === false) {
        console.log(userQueue[currentUser].swiperight + "  is false");
        setHidden(true);
      }
    }
  });

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
    <span>
      <SpeedDial
        ariaLabel="User actions"
        sx={{ position: "absolute", bottom: 30, right: 30 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            sx={{ fontSize: "7rem" }}
          />
        ))}
      </SpeedDial>
    </span>
  );
}
