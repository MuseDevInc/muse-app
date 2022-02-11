import React from "react";
import {
  Box,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { LoginSubmitButton } from "./LoginSubmitButton";
import { useState, useEffect } from "react";
export function Login() {
  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password };
    console.log(form);
    fetch("http://localhost:4000/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    console.log(username);
    console.log(password);
  });
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
          <Button onClick={handleSubmit}> Login </Button>
        </FormGroup>
      </Box>
    </Paper>
  );
}