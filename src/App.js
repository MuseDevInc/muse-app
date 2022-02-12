import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/formComponents/Login";
import CreateProfile  from "./components/formComponents/CreateProfile"
import UserProfile from "./components/user/UserProfile";
// import Messenger from "./components/messaging/Messenger";
// import { EditProfile } from "./components/user/EditProfile"
// import { UserProfile } from "./components/user/UserProfile"
import Messenger from "./components/messenger/Messenger";
import { RegisterSession } from "./components/formComponents/RegisterSession";
import useSpotifyAuth from "./hooks/useSpotifyAuth";


const spotifyCode = new URLSearchParams(window.location.search).get('code')

console.log(spotifyCode);
//stuff
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userloggedIn, setUserLoggedIn] = useState('')
  let userId = JSON.parse(localStorage.getItem("userId"))
  console.log(userId)
  const accessToken = useSpotifyAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterSession />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        {/* <Route path='/editprofile' element={<EditProfile/>}></Route> */}
        <Route path="/createprofile" element={spotifyCode ? <CreateProfile accessToken={accessToken} /> : null}></Route>
        <Route path="/messenger" element={<Messenger />}></Route>

      </Routes>

      {/* {loggedIn ? <Main /> : <Landing />} */}
      {/* <Register/> */}
    </>
  );
}

export default App;
