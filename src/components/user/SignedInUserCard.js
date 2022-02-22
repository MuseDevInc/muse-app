import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  styled,
  Chip,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import MusicPlayer from "./MusicPlayer";

let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const SignedInUserCard = ({ username, displayProfile, handleNavToEdit }) => {
  const [currentPlayback, setCurrentPlayback] = useState();

  return (
    <>

      <Stack
        sx={{
          alignItems: "center",
          paddingBottom: "1rem",
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            padding: "2rem",
            margin: "2rem",
            position: "relative"
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {username[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton
                onClick={handleNavToEdit}
                aria-label="upload picture"
                component="span"
              >
                <EditIcon />
              </IconButton>
            }
            title={username}
            subheader="New York City, New York"
          />
          <CardMedia
            component="img"
            height="360"
            image={
              displayProfile.favSongs.length > 0
                ? displayProfile.favSongs[0].albumUrl
                : null
            }
            alt={
              displayProfile.favSongs.length > 0
                ? displayProfile.favSongs[0].title
                : null
            }
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
              <Typography>{displayProfile.aboutMe}</Typography>
            </AccordionDetails>
          </Accordion>
          { displayProfile.favGenres &&
            <> 
            <Divider sx={{ textAlign: "center" }}>
            Favorite Genre
          </Divider>
          {displayProfile.favGenres.map((genre) => {
            return <Chip key={genre} label={genre} />
          })}
            </>
          }
          {displayProfile.favAlbum && <>
            <Divider>Favorite Album of All Time</Divider>
            <Typography>{displayProfile.favAlbum}</Typography>
          </>}
          <Divider>Top 3 Songs</Divider>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}
            sx={{ margin: "1rem", alignItems: "space" }}
          >
            {displayProfile.favSongs.map((song) => {
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
        </Card>
      </Stack>

    </>
  );
};

export default SignedInUserCard;
