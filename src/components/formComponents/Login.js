import React from 'react';
import { Box, FormGroup, TextField } from '@mui/material';
import { useTheme } from '@mui/material';
import { LoginSubmitButton } from './LoginSubmitButton';

export function Login() {
    const theme = useTheme()
    //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  return (
      <Box>
      <FormGroup sx={{alignItems: "center"}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />  
          <LoginSubmitButton/>
      </FormGroup>
      </Box>
  );
}

