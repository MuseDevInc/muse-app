import React from "react";
import { Box, FormGroup, TextField, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import { LoginSubmitButton } from "./LoginSubmitButton";
import { useState, useEffect } from "react";

export function RegisterSession() {
  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSubmit = (e) => {
      console.log('hitting')
    e.preventDefault();
    const form = { username, password, verifyPassword };

    fetch('http://localhost:4000/session/register', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      console.log('new user logged in');
    })
  }

  return (
    <>
      {/* <Paper
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
              label="Email"
              variant="outlined"
              margin="dense"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="dense"
            />
            <LoginSubmitButton />
          </FormGroup>
        </Box>
      </Paper> */}
   

    <div className="login">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type="text" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <textarea
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></textarea>
        <label>Verify Password</label>
        <textarea
          required
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        ></textarea>
        
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
    </>
  );
}