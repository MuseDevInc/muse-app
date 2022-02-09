import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import DiscoverUserGetter from "./discover/DiscoverUserGetter";

export function MuseWindow({gradient}) {
    let backgroundGradient = gradient
  return (
    <Paper
    /*   elevation={8} */
      sx={{ minHeight: "93vh", background: `${backgroundGradient}` }}
    >
{/*       <Stack alignItems="center"> */}

        <DiscoverUserGetter />
      
    {/*   </Stack> */}
    </Paper>
  );
}
