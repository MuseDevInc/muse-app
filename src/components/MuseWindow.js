import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import DiscoverUserGetter from "./discover/DiscoverUserGetter";

export function MuseWindow({gradient}) {
    let backgroundGradient = gradient
  return (
    <Paper
      elevation={8}
      sx={{ minHeight: "90vh", background: `${backgroundGradient}` }}
    >
      <Stack alignItems="center">
        <Typography variant="h4"> Main Page </Typography>

        <DiscoverUserGetter />
      
      </Stack>
    </Paper>
  );
}
