import { useState } from "react";
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
export default function MatchActionButtons() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
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
