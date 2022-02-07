import { Typography, Paper } from '@mui/material';
import React from 'react';
import { NavBar } from './navbar/AppNav';
import { Login } from './formComponents/Login';
import { Register } from './formComponents/Register';
export function Main() {
  return( <div>
      <NavBar/>
      <Paper elevation={12} sx={{minWidth: "95vw", maxWidth: "95vw", minHeight: "95vh"}}>
      <Typography variant="h1"> Main Page </Typography>
      </Paper>
  </div>);
}


