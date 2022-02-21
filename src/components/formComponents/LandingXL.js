import React from "react";
import {
  Card,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Button,
  Link,
  FormControl,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, color } from "@mui/system";
import Footer from "../footer/Footer";
import logo from "../alphabet.png";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export function LandingXL({ currentUser, setCurrentUser }) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    if (currentUser) {
      navigate("/main");
    }
  }, [currentUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password };
    console.log(form);
    fetch("http://localhost:4000/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("currentUsername", res.currentUsername);
          localStorage.setItem("currentUserId", res.currentUserId);
          setCurrentUser({
            ...currentUser,
            currentUsername: res.currentUsername,
            currentUserId: res.currentUserId,
          });
          setErrorMessage(null)
        }
        else{
          setErrorMessage(true)
        }
      });
  };

  return (
    <>

      <Grid
        container
        columns={10}
        columnSpacing={10}
        alignContent="space-around"
        alignItems="center"
        textAlign="center"
      >
        <Grid item lg={6} sx={{marginY: "30vh"}}>
          <Grid container direction="column" alignContent="center">
            <Grid item sx={{ marginTop: "2rem" }}>
              <img src={logo} style={{ maxHeight: "10rem" }} alt="logo" />
              <span style={{ fontSize: "8.25rem", color: "white" }}>use</span>
            </Grid>

            <Grid item>
              <Typography variant="h4" sx={{ color: "whitesmoke" }}>
                Connect with people who share the same taste in music as you do
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={4} justifyContent="center">
          <Paper elevation={12}  sx={{maxWidth: "40rem", backgroundColor: "softwhite"}}>
              <Stack justifyContent="center" spacing={0} alignItems="stretch">
            <FormGroup
              sx={{
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Typography variant="h3">Sign in</Typography>
              <FormControl>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                sx={{minWidth: "20rem"}}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                margin="normal"
                  type="password"
                  sx={{minWidth: "20rem"}}
                  onChange={(e) => setPassword(e.target.value)}
                
                />
              </FormControl>
              <Button size="large" onClick={handleSubmit} variant="contained">
                {" "}
                Log in{" "}
              </Button>
              {errorMessage ? (
                    <p style={{color:'red'}}>*Invalid username or password.</p>
                  ): null}
              <p>
                Don't have an account?{" "}
                <Link href="/register">Click here to register</Link>
              </p>
            </FormGroup>
            </Stack>
          </Paper>
         
        </Grid>

        <Footer img={"../../pictures/wave.png"} />
      </Grid>
    </>
  );
}
