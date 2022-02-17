import "./App.css";
import React, { useState, useEffect, useContext, createContext } from "react";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Route, Routes, useInRouterContext } from "react-router-dom";
import { Login } from "./components/formComponents/Login";
import CreateProfile from "./components/formComponents/CreateProfile";
import UserProfile from "./components/user/UserProfile";
// import Messenger from "./components/messaging/Messenger";
import EditProfile from "./components/user/EditProfile";
import { Paper } from "@mui/material";
import Messenger from "./components/messenger/Messenger";
import { RegisterSession } from "./components/formComponents/RegisterSession";
import useSpotifyAuth from "./hooks/useSpotifyAuth";

// const spotifyCode = new URLSearchParams(window.location.search).get('code')
//stuff

// after putting the context provider in, I realized we have req.sessions.id on the back end so I don't believe that we need any user object passed, neither in state nor context, to children of app. States or context can be localized to chat or discover functionality (if needed), but shouldn't edit and show profile just rely on the session existing, and then use the id of the authorized user to provide and modify profile doc? State is useful for triggering app rerender on logout or when session expires, but we could also just use router to require auth for all routes except login and register. Backend would catch session expiring whenever user swipes (because of appending swiped_ arrays, and any action in messaging could similarly catch the session not existing. We will see if we need to trigger a whole app rerender to a notAuth state or context, but i think router might handle that for us. )
export const UserContext = React.createContext();

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
        minHeight: "92vh",
        maxHeight: "100vh",
        background: `${backGrad}`,
      }}
    >
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RegisterSession
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
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
