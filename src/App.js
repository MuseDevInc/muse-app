import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Route, Routes, Link } from "react-router-dom";
import { Register } from "./components/formComponents/Register";
import { Login } from "./components/formComponents/Login";
import CreateProfile  from "./components/formComponents/CreateProfile"
import UserProfile from "./components/user/UserProfile";
// import Messenger from "./components/messaging/Messenger";
// import { EditProfile } from "./components/user/EditProfile"
// import { UserProfile } from "./components/user/UserProfile"
import Messenger from "./components/messenger/Messenger";
import { RegisterSession } from "./components/formComponents/RegisterSession";


const spotifyCode = new URLSearchParams(window.location.search).get('code')

console.log(spotifyCode);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userloggedIn, setUserLoggedIn] = useState('')

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registerSession" element={<RegisterSession />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        {/* <Route path='/editprofile' element={<EditProfile/>}></Route> */}
        <Route path="/createprofile" element={spotifyCode ? <CreateProfile spotifyCode={spotifyCode} /> : null}></Route>
        <Route path="/messenger" element={<Messenger />}></Route>

      </Routes>

      {/* {loggedIn ? <Main /> : <Landing />} */}
      {/* <Register/> */}
    </>
  );
}

export default App;
