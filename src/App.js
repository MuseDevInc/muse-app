import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Route, Routes} from "react-router-dom";
import { Login } from "./components/formComponents/Login";
import CreateProfile from "./components/formComponents/CreateProfile";
import UserProfile from "./components/user/UserProfile";
// import Messenger from "./components/messaging/Messenger";
import  EditProfile  from "./components/user/EditProfile"
import { Paper } from "@mui/material";
import Messenger from "./components/messenger/Messenger";
import { RegisterSession } from "./components/formComponents/RegisterSession";
import useSpotifyAuth from "./hooks/useSpotifyAuth";

// const spotifyCode = new URLSearchParams(window.location.search).get('code')
//stuff
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const accessToken = useSpotifyAuth();
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  return (
    <>
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
          <Route path="/login" element={<Login currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />}></Route>
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
          <Route path="/userprofile" element={<UserProfile currentUser={currentUser}/>}></Route>
          <Route path="/editprofile" element={<EditProfile currentUser={currentUser}/>}></Route>
          <Route
            path="/createprofile"
            element={
              <CreateProfile
                accessToken={accessToken}
                currentUser={currentUser}
              />
            }
          ></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
        </Routes>
      </Paper>
    </>
  );
}

export default App;
