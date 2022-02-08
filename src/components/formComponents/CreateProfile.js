import React from "react";
import { Box, FormGroup, TextField, Typography, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material";
import { CreateSubmitButton } from "./CreateSubmitButton";

export function CreateProfile() {
  const theme = useTheme();
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.

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
      <FormGroup sx={{ alignItems: "center", margin: "2rem" }}>
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="About Me"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Favorite Genre"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Top 1 Song"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Top 2 Song"
          variant="outlined"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
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
