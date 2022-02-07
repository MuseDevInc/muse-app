import { Typography } from '@mui/material';
import React from 'react';
import { NavBar } from './navbar/AppNav';
import { Login } from './formComponents/Login';
import { Register } from './formComponents/Register';
export function Main() {
  return( <div>
      <NavBar/>
      <Typography variant="h1"> Main Page </Typography>
    
  </div>);
}


