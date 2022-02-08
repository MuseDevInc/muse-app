import React from "react";
import { Box, FormGroup, TextField, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import { LoginSubmitButton } from "./LoginSubmitButton";
import { useState, useEffect } from "react";

export function Login() {
  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  return (
    <>

      <Paper elevation={8} sx={{ minHeight: "100vh", maxHeight: "100vh", background: `${backGrad}` }}>

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
      </Paper>


    </>
  );
}
