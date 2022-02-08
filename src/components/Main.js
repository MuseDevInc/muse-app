import { Typography, Paper, Stack } from "@mui/material";
import React from "react";
import { NavBar } from "./navbar/AppNav";
import { Login } from "./formComponents/Login";
import { Register } from "./formComponents/Register";
import { DiscoverPaper } from "./discover/DiscoverPaper";
import { DiscoverContainer } from "./discover/DiscoverContainer";
import { PlaybackControls } from "./discover/PlaybackControls";
export function Main() {
  let backgroundGradient = `'linear-gradient(to-bottom, #00377C , #F5F5F5)'`;
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  console.log(backgroundGradient);
  console.log(backGrad);
  return (
    <div>
      <NavBar />
      <Paper
        elevation={8}
        sx={{ minHeight: "80vh", maxHeight: "90vh", background: `${backGrad}` }}
      >
        <Stack alignItems="center">
          <Typography variant="h4"> Main Page </Typography>
        
            <DiscoverPaper />
            <PlaybackControls/>
        </Stack>
      </Paper>
    </div>
  );
}
