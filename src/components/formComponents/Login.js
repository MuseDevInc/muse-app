import React from "react";
import {
  Card,
  FormGroup,
  TextField,
  Typography,
  Paper,
  Button,
  Link
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { color } from "@mui/system";
import Footer from "../footer/Footer";
import logo from '../alphabet.png'
export function Login({ currentUser, setCurrentUser }) {
  
  let navigate = useNavigate()
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if (currentUser){
      navigate('/main')  
    }
  },[currentUser, navigate]);

  
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
          localStorage.setItem('currentUsername', res.currentUsername)
          localStorage.setItem('currentUserId', res.currentUserId)
          setCurrentUser({
            ...currentUser,
            currentUsername: res.currentUsername,
            currentUserId: res.currentUserId,
          });
        }
      });
  };

  return (
    <>
    <Paper
      elevation={8}
      sx={{
        minHeight: "100vh",
        maxHeight: "100vh",
        background: `${backGrad}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center', marginTop:"10%"}}>
      <img src={logo} style={{maxHeight:'100px'}} alt="logo"/> <span style={{fontSize:'5rem', color:"white"}}>use</span>
      </div>
      {/* <div style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',}}>
      <Typography
        sx={{
          textAlign: "center",
          padding: "2rem",
          margin: "1rem",
          color: "white",
        }}
        variant="h1"
      >
        Muse
      </Typography>
      </div> */}
      <div>
        <h3 style={{display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center', marginTop:'10%',color:'whitesmoke'}}>Connect with people who share the same taste in music as you do</h3>
      </div>
      <div style={{
        position: "absolute",
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <Card sx={{ alignSelf: "center", maxWidth: '40'  }}>
        <FormGroup
          sx={{
            Justify: "Center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography variant="h5">Sign in</Typography>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            margin="dense"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="dense"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} variant="contained">
            {" "}
            Log in{" "}
          </Button>
          <p >Don't have an account? <Link href="/register">Click here to register</Link></p>

        </FormGroup>
      </Card>
      </div>
      
    </Paper>
    <Footer img={'../../pictures/wave.png'}/>
    </>
  );
}