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

const SignedInUserCard = ({username, displayProfile, handleNavToEdit}) => {
  useEffect(() => {
    console.log(username);
    // console.log(displayProfile);
  }, []);

  return (
    <>
        <Paper
          elevation={8}
          sx={{
            minHeight: "100vh",
            maxHeight: "100vh",
            background: `${backGrad}`,
          }}
        >
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

              <Root>
                <Divider sx={{ padding: "1rem", textAlign: "center" }}>
                  Favorite Genre
                </Divider>
                {displayProfile.favGenres}
                <Divider>Favorite Album of All Time</Divider>
              </Root>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1}
                sx={{ margin: "1rem", alignItems: "space" }}
              >
                {displayProfile.favSongs.map((song) => {
                  return <MusicPlayer song={song} />;
                })}
              </Stack>
            </Card>
          </Stack>
        </Paper>
    </>
  );
};

export default SignedInUserCard;
