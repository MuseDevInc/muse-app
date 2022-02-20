import React, { useLayoutEffect } from "react";
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
import { LandingXL } from "./LandingXL";

export function Login({ currentUser, setCurrentUser }) {
  let navigate = useNavigate();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [largeView, setLargeView] = useState();
  const xlScreen = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
    console.log(largeView);
    return setLargeView(xlScreen);
  }, [xlScreen]);

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
          navigate('/main')  
        }
      });
  };

  return (
    <Box>
      {largeView ? (
        <LandingXL currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <Grid
          container
          spacing={3}
          direction="column"
          columns={3}
          rowGap={{ xs: 3 }}
          alignContent="center"
          alignItems="center"
          textAlign="center"
          justifyContent="space-between"
        >
          <Grid item sx={{ marginTop: "2.5rem" }}>
            <img src={logo} style={{ maxHeight: "6.25rem" }} alt="logo" />
            <span style={{ fontSize: "5rem", color: "white" }}>use</span>
            <Typography variant="h5" sx={{ color: "whitesmoke" }}>
              Connect with people who share the same taste in music as you.
            </Typography>
          </Grid>

          <Grid item sx={{zIndex: 'tooltip'}}>
            <Paper elevation={4} sx={{ flexShrink: 1}}>
              <Box sx={{zIndex: 'tooltip'}}>
              <FormGroup>
                <Stack
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "space-around",
                    padding: ".8rem",
                  }}
                >
                  <Typography variant="h5">Sign in</Typography>
                  <FormControl>
                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      margin="dense"
                      sx={{ minWidth: "16rem", maxWidth: "90%" }}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="password"
                      label="Password"
                      variant="outlined"
                      margin="dense"
                      type="password"
                      sx={{ minWidth: "16rem", maxWidth: "90%" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ maxWidth: "50%",
        
                  borderRadius: ".3rem" }}
                  >
                    {" "}
                    Log in{" "}
                  </Button>
                  <p>
                    Don't have an account?{" "}
                    <Link href="/register">Click here to register</Link>
                  </p>
                </Stack>
              </FormGroup>
              </Box>
            </Paper>
          </Grid>

          <Footer img={"../../pictures/wave.png"} />
        </Grid>
      )}
    </Box>
  );
}
