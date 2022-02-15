import React from 'react'
import {
  Typography,
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

const userCard = (userName, ) => {
  return (
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
                  {userName[0].toUpperCase()}
                </Avatar>
              }
              action={   
              // <Button onClick={handleCreateSubmit} variant="outlined">
               <IconButton onClick={handleCreateSubmit} aria-label="upload picture" component="span">
                  <EditIcon />
                </IconButton>
            // </Button>
              
              }
              title={userName}

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
  )
}

export default userCard