import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useSpotifyAuth from "../../hooks/useSpotifyAuth";
import SongResultContainer from "./SongResultContainer";
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
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import IconButton from "@mui/icons-material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { CreateSubmitButton } from "./CreateSubmitButton";
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

export default function CreateProfile({ spotifyCode }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let navigate = useNavigate();

  let handleCreateSubmit = (e) => {
    e.preventDefault();
    navigate("/userprofile");
  };

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const accessToken = useSpotifyAuth(spotifyCode);
  const [searchTopOne, setSearchTopOne] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cancelQuery, setCancelQuery] = useState();
  const [hideSearchResults, setHideSearchResults] = useState(true);
  const [topSongs, setTopSongs] = useState([]);

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
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // run everytime search params from users and spotify access token change
  useEffect(() => {
    if (!searchTopOne) return setSearchResults([]);
    if (!accessToken) return;
    //  use spotify web api to get seacrh results
    spotifyApi.searchTracks(searchTopOne).then((res) => {
      console.log(res.body);
      //  map over the result to just grab specific keys of each item in the search results
      let cancel = false;
      if (cancel) {
        return;
      }
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const albumIcon = track.album.images.reduce(
            // grab smallest image using reduce
            (smallestImage, image) => {
              if (image.height < smallestImage.height) {
                return image;
              }
              return smallestImage;
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
    });
    return setCancelQuery(true);
  }, [setSearchResults, searchTopOne, accessToken]);

  // return (
  //   <Paper
  //     elevation={8}
  //     sx={{ minHeight: "100vh", maxHeight: "100vh", background: `${backGrad}` }}
  //   >
  //     <Box>
  //       <Typography
  //         sx={{
  //           textAlign: "center",
  //           padding: "1%",
  //           margin: "1%",
  //           color: "white",
  //         }}
  //         variant="h1"
  //       >
  //         MUSE
  //       </Typography>
  //       { topSongs.length > 0 ? <img src={topSongs[0].albumUrl} style={{height: "100px", width: "100px"}} alt={topSongs[0].title}></img> : null}
  //       <FormGroup sx={{ alignItems: "center", margin: "2rem" }}>
  //         <TextField
  //           id="location"
  //           label="Location"
  //           variant="outlined"
  //           margin="dense"
  //         />
  //         <TextField
  //           id="about-me"
  //           label="About Me"
  //           variant="outlined"
  //           margin="dense"
  //           multiline
  //           rows={4}
  //         />
  //         <Autocomplete
  //           multiple
  //           id="tags-standard"
  //           options={["Pop", "Rock", "Jazz"]}
  //           getOptionLabel={(option) => option}
  //           filterSelectedOptions
  //           renderInput={(params) => (
  //             <TextField
  //               {...params}
  //               variant="outlined"
  //               label="Favorite Genres"
  //               placeholder="Favorite Genres"
  //             />
  //           )}
  //           margin="dense"
  //         />
  //         <TextField
  //           id="favorite_song1"
  //           label="Your top 3 songs"
  //           variant="outlined"
  //           margin="dense"
  //           value={searchTopOne}
  //           disabled={topSongs.length < 3 ? false : true}
  //           onChange={(e) => setSearchTopOne(e.target.value)}
  //         />
  //         { searchTopOne ? <Box>
  //           <div style={{height: "20vh", overflow: "scroll", background: "white"}}>
  //           {searchResults?.map(track => <SongResultContainer track={track} key={track.uri} chooseTrack={chooseTrack} />
  //           )}
  //           </div>
  //         </Box> : null}

  //         <div>
  //           {topSongs?.map(track => {
  //             return (
  //               <div className='song-container'>
  //               <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt={track.title}></img>
  //               <div className='song-text'>
  //                 <div>{track.title}</div>
  //               </div>
  //               <button onClick={() => setTopSongs(topSongs.filter(topSong => topSong.uri !== track.uri))}>Remove</button>
  //             </div>
  //             )
  //             }
  //           )}
  //         </div>

  //         <CreateSubmitButton />
  //       </FormGroup>
  //     </Box>
  return (
    <Paper
      elevation={8}
      sx={{ minHeight: "92vh", maxHeight: "100vh", background: `${backGrad}` }}
    >
      <Stack alignItems={"center"}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Username"
            subheader="New York City, NY"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://i.cbc.ca/1.6163000.1630614872!/fileImage/httpImage/drake-certified-lover-boy-album-art.jpeg"
            alt="CLB"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Create your Profile.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
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
              {/* <TextField
                fullWidth
                id="favAlbum"
                label="Favorite Album of All Time"
                variant="outlined"
                margin="dense"
                size="small"
              />{" "} */}

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
              {console.log(searchResults)}
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

              <div>
                {topSongs?.map((track) => {
                  return (
                    <div className="song-container">
                      <img
                        src={track.albumUrl}
                        style={{ height: "64px", width: "64px" }}
                        alt={track.title}
                      ></img>
                      <div className="song-text">
                        <div>{track.title}</div>
                      </div>
                      <button
                        onClick={() =>
                          setTopSongs(
                            topSongs.filter(
                              (topSong) => topSong.uri !== track.uri
                            )
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Collapse>
        </Card>
        <div className="" style={{ padding: "1rem" }}>
          <CreateSubmitButton handleCreateSubmit={handleCreateSubmit} />
        </div>
      </Stack>
    </Paper>
  );
}
