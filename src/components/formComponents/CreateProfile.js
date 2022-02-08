import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useSpotifyAuth from '../../hooks/useSpotifyAuth';
import {
  Box,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Autocomplete,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { CreateSubmitButton } from "./CreateSubmitButton";
import { useNavigate } from "react-router-dom";


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export function CreateProfile({ spotifyCode }) {

  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.

  let navigate = useNavigate();

  let handleCreateSubmit = (e) => {
    e.preventDefault();
    navigate("/userprofile");
  };

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const accessToken = useSpotifyAuth(spotifyCode);

  //    run when access token refreshes
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <Paper
      elevation={8}
      sx={{ minHeight: "100vh", maxHeight: "100vh", background: `${backGrad}` }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            padding: "1%",
            margin: "1%",
            color: "white",
          }}
          variant="h1"
        >
          MUSE
        </Typography>
        <FormGroup sx={{ alignItems: "center", margin: "2rem" }}>
          <TextField
            id="location"
            label="Location"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="about-me"
            label="About Me"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
          />
          <Autocomplete
            multiple
            id="tags-standard"
            options={["Pop", "Rock", "Jazz"]}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Favorite Genres"
                placeholder="Favorite Genres"
              />
            )}
            margin="dense"
          />
          <TextField
            id="favorite_song1"
            label="Top 1 Song"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="favorite_song2"
            label="Top 2 Song"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="favorite_song3"
            label="Top 3 Song"
            variant="outlined"
            margin="dense"
          />
          <CreateSubmitButton />
        </FormGroup>
      </Box>
    </Paper>
  );
}
