import React from "react";
import { Box, FormGroup, TextField, Typography, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import { RegisterSubmitButton } from "./RegisterSubmitButton";
import { useNavigate } from "react-router-dom";

export function Register() {
  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let navigate = useNavigate();

  let handleRegisterSubmit = (e) => {
    e.preventDefault();
    navigate("/createprofile");
  };

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";


  return (
    <Paper elevation={8} sx={{ minHeight: "100vh", maxHeight: "100vh", background: `${backGrad}` }}>
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          padding: "2rem",
          margin: "1rem",
          color: "white"
        }}
        variant="h1"
      >
        MUSE
      </Typography>
      <FormGroup
        onSubmit={handleRegisterSubmit}
        sx={{ alignItems: "center", margin: "2rem" }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          margin="dense"
        />
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
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          margin="dense"
        />
        <RegisterSubmitButton handleRegisterSubmit={handleRegisterSubmit} />
      </FormGroup>
    </Box>
    </Paper>
  );
}
