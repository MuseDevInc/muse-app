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

export function RegisterSession() {
  //handlers, will need state and setstate props. Can add popovers/helpers and additional validation/error handling feedback.
  let navigate = useNavigate()
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [largeView, setLargeView] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    localStorage.clear()
  }, [])

  //  navigate the createProfile once currentUser is defined

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password, verifyPassword };
    console.log(form);

    fetch(process.env.REACT_APP_BACKEND_SERVER + "/session/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include"
    })
      .then((res => res.json()))
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('currentUsername', res.currentUsername)
          localStorage.setItem('currentUserId', res.currentUserId)
          setErrorMessage(null)
          navigate('/createprofile')

        }
        else {
          setErrorMessage(true)
        }
      })
  };

  return (
    <Box>
      {largeView ? (
        <LandingXL />
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

          <Grid item sx={{ zIndex: 'tooltip' }}>
            <Paper elevation={4} sx={{ flexShrink: 1 }}>
              <Box sx={{ zIndex: 'tooltip' }}>
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
                    <Typography variant="h5">Sign up</Typography>
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
                      <TextField
                        id="password"
                        label="Verify Password"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        sx={{ minWidth: "16rem", maxWidth: "90%" }}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                      />

                    </FormControl>
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      sx={{
                        maxWidth: "50%",

                        borderRadius: ".3rem"
                      }}
                    >
                      {" "}
                      Register{" "}
                    </Button>
                    {errorMessage ? (
                      <p style={{ color: 'red' }}>*Username already taken or passwords must match.</p>
                    ) : null}
                    <p>
                      Have an account already?{" "}
                      <Link href="/login">Click here to login</Link>
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