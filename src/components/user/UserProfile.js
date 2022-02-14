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

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  const content = "Pop"

  let setProfile = (profile) => {
    console.log(profile);
    setDisplayProfile({...profile,
      aboutMe: profile.aboutMe,
      favGenres: profile.favGenres,
      favAlbum: profile.favAlbum,
      favSongs: profile.favSongs,
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
    console.log();
    if (profileToDisplay) {
      // setDisplayProfile(profileToDisplay)
      setProfile(profileToDisplay);
    }
  };

  useEffect(() => {
    if (!displayProfile) {
      getProfile();
    }
  }, []);

  useEffect(() => {
    console.log(displayProfile);
  }, [displayProfile])

 

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  
  return (
      <Paper
        elevation={8}
        sx={{
          minHeight: "100vh",
          maxHeight: "100vh",
          background: `${backGrad}`,
        }}
      >
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
                  
                  {displayProfile && displayProfile.currentUsername[0].toUpperCase()}
                </Avatar>
              }
              action={   
              // <Button onClick={handleCreateSubmit} variant="outlined">
               <IconButton onClick={handleCreateSubmit} aria-label="upload picture" component="span">
                  <EditIcon />
                </IconButton>
            // </Button>
              
              }
              title={displayProfile && currentUser.currentUsername}

              subheader="New York City, New York"
            />
            { displayProfile &&
          <CardMedia
          component="img"
          height="360"
          image={(displayProfile.favSongs).length > 0 ? (displayProfile.favSongs)[0].albumUrl : null}
          alt={(displayProfile.favSongs).length > 0 ? (displayProfile.favSongs)[0].title: null}
        /> }
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
              <Divider sx={{ padding: "1rem", textAlign: "center" }}>Favorite Genre</Divider>
              {displayProfile && displayProfile.favGenres}
              <Divider>Favorite Album of All Time</Divider>
            </Root>
              <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
              sx={{ margin: "1rem", alignItems: "space" }}
            >
              { displayProfile && (displayProfile.favSongs).map((song) => {
                return <MusicPlayer song={song} />
              })
              }
            </Stack>

          </Card>
        </Stack>
      </Paper>
  );
};

export default UserProfile;
