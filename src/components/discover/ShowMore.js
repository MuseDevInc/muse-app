import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { DialogContent, IconButton, Stack } from "@mui/material";
import { Card, CardMedia, CardHeader } from "@mui/material";
// import { IconButton } from "@mui/icons-material/Icon"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Divider } from "@mui/material";
import MusicPlayer from "../user/MusicPlayer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useRef } from "react";

export default function ShowMore({
  currentPosition,
  userQueue,
  showMore,
  setShowMore,
}) {
  //   const { onClose, selectedValue, open } = props;
  //   const [open, setOpen] = useState(showMore);

  //offsetLeft

  const handleClose = () => {
    setShowMore(false);
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };

  return (
    <Dialog open={showMore}>
    
      <IconButton
       aria-label="User actions"
       sx={{top: 0, right: 0 }} onClick={handleClose} >
        <CloseIcon />
      </IconButton>
 
        <Card
          sx={{
            position: "relative",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              
               <Typography variant="h6"> {userQueue[currentPosition].owner.username}
               </Typography>
              </Avatar>
            }
            title={userQueue[currentPosition].owner.username}
            
          />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>About Me</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{userQueue[currentPosition].aboutMe}</Typography>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ padding: "1rem", textAlign: "center" }}>
          <Typography variant="body">Top Genres</Typography>
          </Divider>
          {userQueue[currentPosition].favGenres}
          <Divider><Typography variant="h6">Top Tracks</Typography></Divider>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            sx={{ margin: "1rem", alignItems: "space" }}
          >
            {userQueue[currentPosition].favSongs.map((song) => {
              return <MusicPlayer key={song.uri} song={song} />;
            })}
          </Stack>
        </Card>
  
    </Dialog>
  );
}
