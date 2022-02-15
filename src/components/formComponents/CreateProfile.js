import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SongResultContainer from "./SongResultContainer";
import SongCardDisplay from "./SongCardDisplay";
import {
  Box,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Autocomplete,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Collapse,
  Avatar,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function CreateProfile({ accessToken, currentUser }) {
  spotifyApi.setAccessToken(accessToken);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let navigate = useNavigate();

  let handleCreateSubmit = async (e) => {
    e.preventDefault();
    let profileToCreate = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/userCreationPage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aboutMe: aboutMe,
          favGenres: favGenres,
          favAlbum: favAlbum,
          favSongs: topSongs,
        }),
        credentials: "include"
      }
    );
    navigate("/userprofile");

  };

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [searchTopOne, setSearchTopOne] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [aboutMe, setAboutMe] = useState();
  const [favGenres, setFavGenres] = useState([]);
  const [favAlbum, setFavAlbum] = useState();
  const genresOptions = ["Pop", "Rock", "Jazz", "Country"];

  //  select a song
  const chooseTrack = (track) => {
    setSearchTopOne("");
    if (topSongs.filter((topSong) => topSong.uri === track.uri).length >= 1) {
      return;
    }
    if (topSongs.length < 3) {
      setTopSongs([...topSongs, track]);
    }
  };

  // run when access token refreshes
  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);

  // run everytime search params from users and spotify access token change
  useEffect(() => {
    if (!searchTopOne) return setSearchResults([]);
    if (!accessToken) return;
    //  use spotify web api to get seacrh results
    spotifyApi.searchTracks(searchTopOne).then((res) => {
      //  map over the result to just grab specific keys of each item in the search results
      let cancel = false;
      if (cancel) {
        return;
      }
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const albumIcon = track.album.images.reduce(
            // grab biggest image using reduce
            (biggestImage, image) => {
              if (image.height > biggestImage.height) {
                return image;
              }
              return biggestImage;
            },
            track.album.images[0]
          );
          return {
            track_id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: albumIcon.url,
          };
        })
      );
      return (cancel = true);
    });
  }, [setSearchResults, searchTopOne, accessToken]);

  return (
    <>
      <Stack alignItems={"center"}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] , alignItems: "center"}} aria-label="recipe">
                {currentUser.currentUsername[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={currentUser.currentUsername}
            subheader="New York City, NY"
          />
          <CardMedia
            component="img"
            height="194"
            image={
              topSongs.length > 0
                ? topSongs[0].albumUrl
                : "https://i.cbc.ca/1.6163000.1630614872!/fileImage/httpImage/drake-certified-lover-boy-album-art.jpeg"
            }
            alt="CLB"
          />
          <CardActions disableSpacing>
          <CardContent sx={{ alignItems: "center" }}>
            <h1>Tell the world what you listen to</h1>
          </CardContent>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <TextField
                fullWidth
                id="aboutMe"
                label="About Me"
                variant="outlined"
                margin="dense"
                size="small"
                multiline
                rows={4}
                onChange={(e) => {
                  setAboutMe(e.target.value);
                }}
              />
              <Autocomplete
                multiple
                id="favGenres"
                options={genresOptions}
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
                onChange={(e) =>
                  setFavGenres(...favGenres, genresOptions[e.target.value])
                }
              />
              <TextField
                fullWidth
                id="favAlbum"
                label="Favorite Album of All Time"
                variant="outlined"
                margin="dense"
                size="small"
                onChange={(e) => setFavAlbum(e.target.value)}
              />
              <div>
                {topSongs?.map((track) => {
                  const handleClick = () => {

                  }
                  return (
                    <SongCardDisplay key={track.uri} track={track} handleClick={() => setTopSongs(topSongs.filter((topSong) =>topSong.uri !== track.uri))}/>
                  );
                })}
              </div>
              <TextField
                fullWidth
                id="favorite_song1"
                label="Your top 3 songs"
                variant="outlined"
                margin="dense"
                value={searchTopOne}
                disabled={topSongs.length < 3 ? false : true}
                onChange={(e) => setSearchTopOne(e.target.value)}
              />
              {searchTopOne ? (
                <Box>
                  <div
                    style={{
                      height: "20vh",
                      overflow: "scroll",
                      background: "white",
                    }}
                  >
                    {searchResults?.map((track) => (
                      <SongResultContainer
                        track={track}
                        key={track.uri}
                        chooseTrack={chooseTrack}
                      />
                    ))}
                  </div>
                </Box>
              ) : null}
            </CardContent>
          </Collapse>
          <div style={{ padding: "1rem", justifyContent: "center" }}>
            <Button onClick={handleCreateSubmit} variant="outlined">
              {" "}
              Create Profile
            </Button>
          </div>
        </Card>
      </Stack>
    </>
  );
}
