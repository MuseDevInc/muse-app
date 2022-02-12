import React from "react";
import { Typography, Button, Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Login } from "./formComponents/Login";
import { Link } from "react-router-dom";

export function Landing() {
  const theme = useTheme();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  return (
    <>
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
      <Stack alignItems="center" justifyContent="center" spacing={1}>
        <Link
          to="/login"
          element={<Login />}
          style={{textDecoration:"none",padding:"1rem", margin: "1rem", Justify: "Center" }}
        >
          <Button size="sm" variant="contained">
            login page
          </Button>
        </Link>
        <Link to="/register" style={{ textDecoration:"none",padding:"1rem", marginTop: "1rem", Justify: "Center"}}>
          <Button size="sm" variant="contained">
            Sign Up
          </Button>
        </Link>
        <Link to="/main" style={{ textDecoration:"none",padding:"1rem", marginTop: "1rem", Justify: "Center"}}>
          <Button size="sm" variant="contained">
            Go to main
          </Button>
        </Link>
      </Stack>
      </Paper>
    </>
  );
}
