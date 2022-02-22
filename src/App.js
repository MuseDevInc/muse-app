import "./App.css";
import React, { useState, useEffect, useContext, createContext } from "react";
import { Main } from "./components/Main";
import { Route, Routes, useInRouterContext } from "react-router-dom";
import { Login } from "./components/formComponents/Login";
import CreateProfile from "./components/formComponents/CreateProfile";
import UserProfile from "./components/user/UserProfile";
import EditProfile from "./components/user/EditProfile";
import { Paper } from "@mui/material";
import Messenger from "./components/messenger/Messenger";
import { RegisterSession } from "./components/formComponents/RegisterSession";
import useSpotifyAuth from "./hooks/useSpotifyAuth";

// const spotifyCode = new URLSearchParams(window.location.search).get('code')
//stuff


export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let localUser = {
    currentUsername: localStorage.getItem("currentUsername"),
    currentUserId: localStorage.getItem("currentUserId"),
  };
  const accessToken = useSpotifyAuth();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  return (
    <Paper
      elevation={8}
      sx={{
        minHeight: "100vh",
        maxHeight: "200vh",
        background: `${backGrad}`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
  
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route
          path="/login"
          element={
            <Login/>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RegisterSession/>
          }
        ></Route>

        <Route path="/main" element={<Main />}></Route>
        <Route
          path="/userprofile"
          element={<UserProfile currentUser={localUser} />}
        ></Route>
        <Route
          path="/editprofile"
          element={
            <EditProfile currentUser={localUser} accessToken={accessToken} />
          }
        ></Route>
        <Route
          path="/createprofile"
          element={
            <CreateProfile accessToken={accessToken} currentUser={localUser} />
          }
        ></Route>
        <Route
          path="/messenger"
          element={<Messenger currentUser={localUser} />}
        ></Route>
      </Routes>
    </Paper>
  );
}
