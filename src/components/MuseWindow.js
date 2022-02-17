import React from "react";
import { Paper } from "@mui/material";
import { DiscoverUserGetter } from "./discover/DiscoverUserGetter";

export function MuseWindow({ gradient }) {
  let backgroundGradient = gradient;

  return (
    <Paper sx={{ minHeight: "93vh", background: `${backgroundGradient}` }}>
      <DiscoverUserGetter />
    </Paper>
  );
}
