import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import useSpotifyAuth from '../../hooks/useSpotifyAuth';
import SongResultContainer from "./SongResultContainer";
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
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const accessToken = useSpotifyAuth(spotifyCode);
  const [searchTopOne, setSearchTopOne] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [cancelQuery, setCancelQuery] = useState()
  const [hideSearchResults, setHideSearchResults] = useState(true)
  const [topSongs, setTopSongs] = useState([])

  const chooseTrack = (track) => {
    setSearchTopOne('')
    if(topSongs.filter(topSong => topSong.uri === track.uri).length >= 1) {
      return
    }
    if (topSongs.length < 3) {
      setTopSongs([...topSongs, track])
    }
  }
  
  // run when access token refreshes
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // run everytime search params from users and spotify access token change
  useEffect(() => {
    if(!searchTopOne) return setSearchResults([])
    if(!accessToken) return
    //  use spotify web api to get seacrh results
    spotifyApi.searchTracks(searchTopOne).then((res) => {
      console.log(res.body);
      //  map over the result to just grab specific keys of each item in the search results
      let cancel = false
      if (cancel) {
        return
      }
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const albumIcon = track.album.images.reduce(
          // grab smallest image using reduce
          (smallestImage, image) => {
            if (image.height < smallestImage.height) {
              return image
            }
            return smallestImage
          }, track.album.images[0]
          )
          return {
            track_id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: albumIcon.url
          }
        })
      )
    })
    return setCancelQuery(true)
  }, [setSearchResults, searchTopOne, accessToken])

  

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
        { topSongs.length > 0 ? <img src={topSongs[0].albumUrl} style={{height: "100px", width: "100px"}} alt={topSongs[0].title}></img> : null}
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
            label="Your top 3 songs"
            variant="outlined"
            margin="dense"
            value={searchTopOne}
            disabled={topSongs.length < 3 ? false : true}
            onChange={(e) => setSearchTopOne(e.target.value)}
          />
          { searchTopOne ? <Box>
            <div style={{height: "20vh", overflow: "scroll", background: "white"}}>
            {searchResults?.map(track => <SongResultContainer track={track} key={track.uri} chooseTrack={chooseTrack} />
            )}
            </div>
          </Box> : null}
          
          <div>
            {topSongs?.map(track => {
              return (
                <div className='song-container'>
                <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt={track.title}></img>
                <div className='song-text'>
                  <div>{track.title}</div>
                </div>
                <button onClick={() => setTopSongs(topSongs.filter(topSong => topSong.uri !== track.uri))}>Remove</button>
              </div>
              )
              }
            )}
          </div>
          
          <CreateSubmitButton />
        </FormGroup>
      </Box>
    </Paper>
  );
}
