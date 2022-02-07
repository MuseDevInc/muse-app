import "./App.css";
import { useState } from "react";
import { Main } from "./components/Main";
import { Landing } from "./components/Landing";
import { Route, Routes, Link } from "react-router-dom";
import { Register } from "./components/formComponents/Register";
import { Login } from "./components/formComponents/Login";
import { CreateProfile } from "./components/formComponents/CreateProfile"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/createprofile" element={<CreateProfile />}></Route>

      </Routes>

      {/* {loggedIn ? <Main /> : <Landing />} */}
      {/* <Register/> */}
    </>
  );
}

export default App;
