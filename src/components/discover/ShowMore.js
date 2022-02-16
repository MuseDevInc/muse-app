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
import { IconButton, Stack } from "@mui/material";
import { Card, CardMedia,CardHeader } from "@mui/material";
// import { IconButton } from "@mui/icons-material/Icon"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Divider } from "@mui/material";
import MusicPlayer from "../user/MusicPlayer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";
import { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'



function ShowMore({ currentPosition, userQueue, showMore, setShowMore }) {
//   const { onClose, selectedValue, open } = props;
//   const [open, setOpen] = useState(showMore);

//   useEffect(() => {
//     console.log(open)
// })

  const handleClose = () => {
    setShowMore(false);
  };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

  return (
    <Dialog open={showMore}> 
      <DialogTitle>Set backup account</DialogTitle>
      <IconButton onClick={handleClose} alignSelf="right">
        <CloseIcon/>
      </IconButton>

   
        <Stack
          sx={{
            alignItems: "center",
            overflow: "scroll",
            paddingBottom: "1rem",
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              padding: "2rem",
              margin: "2rem",
              position: "absolute",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {userQueue[currentPosition].owner.username}
                </Avatar>
              }
              title={''}
              subheader="New York City, New York"
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
                Favorite Genre
              </Divider>
              {userQueue[currentPosition].favGenres}
              <Divider>Favorite Album of All Time</Divider>
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
        </Stack>
    </Dialog>
  );
}

export default ShowMore
