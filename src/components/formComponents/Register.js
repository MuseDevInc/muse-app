import React from 'react';
import { Box, FormGroup, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { RegisterSubmitButton } from './RegisterSubmitButton';

export function Register() {
    const theme = useTheme()
    //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  return (
      <Box>
      <FormGroup sx={{alignItems: "center"}}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />  
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            <RegisterSubmitButton/>
      </FormGroup>
      </Box>
  );
}

