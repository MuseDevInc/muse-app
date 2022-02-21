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

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import logo from "../alphabet.png";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

export function LandingXL() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

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
          setErrorMessage(null)
          navigate("/main");
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
        <Grid item lg={6} sx={{ marginY: "30vh" }}>
          <Grid container direction="column" alignContent="center">
            <Grid item sx={{ marginTop: "2rem" }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: [0.1, 0.25, 0.5, .6] }}
              >
             
                <motion.img src={logo} style={{ maxHeight: "10rem" }} alt="logo" whileHover={{scale: .95}}/>
             
                <span style={{ fontSize: "8.25rem", color: "white" }}>use</span>
             
              </motion.div>
            </Grid>

            <Grid item>
              <Typography variant="h4" sx={{ color: "whitesmoke" }} component={motion.div} 
              initial={{ y: -10 , opacity : 0}} animate={{opacity: 1}} transition={{delay: .4, duration: 3, ease: [0.1, 0.25, 0.5, .6]}}>
                Connect with people who share the same taste in music as you do
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={4} justifyContent="center">
 
              
              
          <Paper
            elevation={12}
            sx={{ maxWidth: "40rem", backgroundColor: "softwhite" }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: .9 }}
            transition={{ 
              delay: .6, 
              duration: 3, 
              ease: [0.1, 0.15, 0.4, .8] 
            }}
         
          >
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
                    sx={{ minWidth: "20rem" }}
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
                    sx={{ minWidth: "20rem" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Button size="large" onClick={handleSubmit} variant="contained" component={motion.button} whileHover={{ scale: 1.05, }}>
                  {" "}
                  Log in{" "}
                </Button>
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