import React from "react";
import { Typography, Button, Paper, Stack } from "@mui/material";
import { useTheme} from "@mui/material";
import { Login } from "./formComponents/Login";
export function Landing() {
  
  /* const theme = useTheme();
  console.log(theme); */
  return (
    <Paper>
      <Typography variant="h1">Landing</Typography>
      <Paper elevation={24} sx={{ minHeight: "60vh", maxWidth: "90vw" }}>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <Button size="sm" variant="contained">
            login page
          </Button>
          <Button variant="outlined">register page</Button>
        </Stack>
        <Login/>
      </Paper>
    </Paper>
  );
}
