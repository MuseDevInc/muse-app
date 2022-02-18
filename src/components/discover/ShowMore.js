import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import {} from "@mui/material/colors";
import { IconButton, Stack } from "@mui/material";
import { Box, Card, CardHeader } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Divider, Chip } from "@mui/material";
import MusicPlayer from "../user/MusicPlayer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ShowMore({
  currentPosition,
  userQueue,
  showMore,
  setShowMore,
}) {
  const [currentPlayback, setCurrentPlayback] = useState();

  const handleClose = () => {
    setShowMore(false);
  };

  return (
    <Dialog open={showMore}
      sx={
        {padding: "2rem",
        margin: "2rem",}}
    >
      <IconButton
        aria-label="User actions"
        sx={{ top: 0, right: 0 }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          position: "relative",
          margin: "2rem"
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <Typography variant="h6">
                {" "}
                {userQueue[currentPosition].owner.username[0]}
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
            <Typography>About {userQueue[currentPosition].owner.username}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{userQueue[currentPosition].aboutMe}</Typography>
          </AccordionDetails>
        </Accordion>

        <Divider >
          <Typography variant="h6">Top Genres</Typography>
        </Divider>
        {userQueue[currentPosition].favGenres.map((genre) => {
                return <>{<Chip key={genre} label={genre} />}</>;
              })}
        <Divider>
          <Typography variant="h6">Top Tracks</Typography>
        </Divider>
        <Box sx={{textAlign:"center"}}>
          <Typography variant="body"> Click on the covers to listen!</Typography>
        </Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
          sx={{ margin: "1rem", alignItems: "space" }}
        >
          {userQueue[currentPosition].favSongs.map((song) => {
            return (
              <MusicPlayer
                key={song.uri}
                song={song}
                setCurrentPlayback={setCurrentPlayback}
              />
            );
          })}
        </Stack>
        <Stack>
          {currentPlayback && (
            <iframe
              title="Spotify"
              src={`https://embed.spotify.com/?uri=${currentPlayback}&theme=black`}
              height="90"
              frameBorder="0"
              allowtransparency="true"
            />
          )}
        </Stack>
      </Box>
    </Dialog>
  );
}
