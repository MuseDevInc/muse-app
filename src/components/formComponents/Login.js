import React from "react";
import {
  Card,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ currentUser, setCurrentUser }) {
  
  let navigate = useNavigate()
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if (currentUser){
      navigate('/main')  
    }
  },[currentUser, navigate]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password };
    console.log(form);
    fetch("http://localhost:4000/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('currentUsername', res.currentUsername)
          localStorage.setItem('currentUserId', res.currentUserId)
          setCurrentUser({
            ...currentUser,
            currentUsername: res.currentUsername,
            currentUserId: res.currentUserId,
          });
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
        display: "flex",
        flexDirection: "column",
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
      <Card sx={{ alignSelf: "center" }}>
        <FormGroup
          sx={{
            Justify: "Center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography variant="h5">Sign in to tune into your muse</Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            margin="dense"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="dense"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} variant="contained">
            {" "}
            Sign in{" "}
          </Button>
        </FormGroup>
      </Card>
    </Paper>
  );
}
