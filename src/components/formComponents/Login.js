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
import { motion } from "framer-motion";

export function Login() {
  let navigate = useNavigate();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const [largeView, setLargeView] = useState();
  const xlScreen = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
    localStorage.clear()
  }, [])

  useEffect(() => {
    console.log(largeView);
    return setLargeView(xlScreen);
  }, [xlScreen]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password };
    console.log(form);
    fetch(process.env.REACT_APP_BACKEND_SERVER+"/session/login", {
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
          navigate('/main')
        }
        else{
          setErrorMessage(true)
        }
      })

  };

  return (
    <Box>
      {largeView ? (
        <LandingXL/>
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

            <motion.div
             initial={{ opacity: 0}}
             animate={{ opacity: 1 }}
             transition={{duration: 3.5, ease: [.1, .25, .5, 1]}} >
              <img
            src={logo}
             style={{ maxHeight: "6.25rem" }}
              alt="logo"
             />
              
            <span style={{ fontSize: "5rem", color: "white" }}>use</span>
            <Typography variant="h5" sx={{ color: "whitesmoke" }}>
              Connect with people who share the same taste in music as you.
            </Typography>
            </motion.div>
          </Grid>

          <Grid item sx={{zIndex: 'tooltip'}}>
          <motion.div
             initial={{ opacity: 0}}
             animate={{ opacity: 1 }}
             transition={{duration: 3.5, ease: [.1, .25, .5, 1]}} >
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
                  {errorMessage ? (
                    <p style={{color:'red'}}>*Invalid username or password.</p>
                  ): null}
                  <p>
                    Don't have an account?{" "}
                    <Link href="/register">Click here to register</Link>
                  </p>
                </Stack>
              </FormGroup>
              </Box>
            </Paper>
            </motion.div>
          </Grid>

          <Footer img={"../../pictures/wave.png"} />
        </Grid>
      )}
    </Box>
  );
}
