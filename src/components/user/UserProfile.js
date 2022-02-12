import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import MusicPlayer from "./MusicPlayer";

import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ currentUser }) => {
  let navigate = useNavigate();
  const [displayProfile, setDisplayProfile] = useState(null);
  let handleCreateSubmit = (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const content = <div>{"Pop"}</div>;

  let setProfile = (profile) => {
    console.log(profile);
    setDisplayProfile({...profile,
      aboutMe: profile.aboutMe,
      favGenres: profile.favGenres,
      favAlbum: profile.favAlbum,
      favSong1: profile.favSong1,
      favSong2: profile.favSong2,
      favSong3: profile.favSong3,
    });
  };

  let getProfile = async () => {
    let profileToGrab = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/userPage",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    let profileToDisplay = await profileToGrab.json();
    if (profileToDisplay) {
      // setDisplayProfile(profileToDisplay)
      setProfile(profileToDisplay);
    }
  };

  useEffect(() => {
    if (!displayProfile) {
      getProfile();
    }
  }, [displayProfile]);

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  
  return (
    <div>
      <Paper
        elevation={8}
        sx={{
          minHeight: "100vh",
          maxHeight: "100vh",
          background: `${backGrad}`,
        }}
      >
        <p> {displayProfile && displayProfile.aboutMe}</p>
        <p>{displayProfile ? displayProfile.favSong1.artist : "false"}</p>
        <Stack alignItems="center">
          <Card
            sx={{
              maxWidth: 500,
              maxHeight: 920,
              padding: "2rem",
              margin: "2rem",
              position: "absolute",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {currentUser && currentUser.currentUsername[0].toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton>
                  <EditIcon />
                </IconButton>
              }
              title={currentUser && currentUser.currentUsername}
              subheader="New York City, New York"
            />
            <CardMedia
              component="img"
              height="360"
              image={displayProfile && displayProfile.favSong1.albumUrl}
              alt={displayProfile && displayProfile.favSong1.title}
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
                <Typography>{displayProfile && displayProfile.aboutMe}</Typography>
              </AccordionDetails>
            </Accordion>

            <Root>
              <Divider sx={{ padding: "1rem" }}>Favorite Genre</Divider>
              {content}
              <Divider>Favorite Album of All Time</Divider>
            </Root>

            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
              sx={{ margin: "1rem", alignItems: "space" }}
            >
              { displayProfile && <MusicPlayer song={displayProfile.favSong1}/>}
              { displayProfile && <MusicPlayer song={displayProfile.favSong2}/>}
              { displayProfile && <MusicPlayer song={displayProfile.favSong3}/>}
            </Stack>
          </Card>
        </Stack>
      </Paper>
    </div>
  );
};

export default UserProfile;
