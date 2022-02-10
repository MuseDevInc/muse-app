import React from "react";
import { Typography, Button, Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Login } from "./formComponents/Login";
import { Link } from "react-router-dom";
import style from "@mui/material";

export function Landing() {
  const theme = useTheme();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  return (
    <>
      {/* <Paper> */}

      <Paper elevation={8} sx={{ minHeight: "100vh", maxHeight: "100vh", background: `${backGrad}` }}>


      <Typography
        sx={{
          textAlign: "center",
          padding: "2rem",
          margin: "1rem",
          color: "white",
         
        }}
        variant="h1"
      >
        MUSE

      </Typography>

      {/* <Paper elevation={10} sx={{ minHeight: "60vh", maxWidth: "100vw" }}> */}
      <Stack alignItems="center" justifyContent="center" spacing={1}>
        <Link
          to="/login"
          element={<Login />}
          style={{textDecoration:"none",padding:"1rem", margin: "1rem", Justify: "Center" }}
        >
          <Button size="sm" variant="outlined">
            login page
          </Button>
        </Link>

        <Link to="/register" style={{ textDecoration:"none",padding:"1rem", marginTop: "1rem", Justify: "Center"}}>
          <Button size="sm" variant="outlined">
            Sign Up
          </Button>
        </Link>
    {/*     route to test navbar / bypass having to handle loggedin state right now  */}
        <Link to="/main/discover" style={{ textDecoration:"none",padding:"1rem", marginTop: "1rem", Justify: "Center"}}>
          <Button size="sm" variant="outlined">
            Go to main
          </Button>
        </Link>
      </Stack>
      </Paper>
      {/* </Paper> */}
    </>
  );
}
