import React from "react";
import {
  Box,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { useState} from "react";
import { useNavigate } from 'react-router-dom'

export function RegisterSession() {
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let navigate = useNavigate()
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password, verifyPassword };
    console.log(form);
    fetch(process.env.REACT_APP_BACKEND_SERVER+"/session/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
   if (res.status === 200) {
     navigate('/createprofile')
     window.location.href=`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}`
     console.log(window.location.href)
    }
    });
  };

  return (
    <Paper
      elevation={8}
      sx={{
        minHeight: "100vh",
        maxHeight: "100vh",
        background: `${backGrad}`,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          padding: "2rem",
          margin: "1rem",
          color: "white",
        }}
        variant="h1"
      >
        MUSE
      </Typography>
      <Box>
        <FormGroup
          sx={{
            Justify: "Center",
            alignItems: "center",
            padding: "1rem",
            marginTop: "5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            margin="dense"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="dense"
            onChange={(e) => setPassword(e.target.value)}
          />
           <TextField
            id="outlined-basic"
            label="VerifyPassword"
            variant="outlined"
            margin="dense"
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}> Register </Button>
        </FormGroup>
      </Box>
    </Paper>
  );
}