import { Paper, IconButton } from '@mui/material';
import { PlayCircleFilled } from '@mui/icons-material';
import { PauseCircleFilled } from '@mui/icons-material';
import React from 'react';

export function PlaybackControls () {
  return (
  <Paper elevation={16} sx={{maxWidth: "70%", borderRadius: 5, marginTop: "2.5rem", opacity: "80%"}}>
      <PlayCircleFilled sx={{fontSize: "3rem"}}/>
      <PlayCircleFilled sx={{fontSize: "3rem"}}/>
      <PauseCircleFilled sx={{fontSize: "3rem"}}/>
      <PlayCircleFilled sx={{fontSize: "3rem"}}/>
      <PlayCircleFilled sx={{fontSize: "3rem"}}/>
  </Paper>
  );
};
