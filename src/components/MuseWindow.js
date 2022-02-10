import React from "react";
import { Paper, Typography, Stack } from "@mui/material";
import DiscoverUserGetter from "./discover/DiscoverUserGetter";
import UserProfile from "./user/UserProfile";
import { Route, Routes, Outlet } from "react-router-dom";

export function MuseWindow({ gradient }) {
  let backgroundGradient = gradient;
  return (
    <Paper
      /*   elevation={8} */
      sx={{ minHeight: "93vh", background: `${backgroundGradient}` }}
    >
      {/*       <Stack alignItems="center"> */}
      <Routes>
        <Route path="/discover" element={<DiscoverUserGetter/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
      </Routes>
      <Outlet/>

      {/*   </Stack> */}
    </Paper>
  );
}
