import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import MusicPlayer from "./MusicPlayer";
import { NavBar } from "../navbar/NavBar";
import SignedInUserCard from "./SignedInUserCard";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ currentUser }) => {
  let navigate = useNavigate();
  const [displayProfile, setDisplayProfile] = useState(null);
  let handleCreateSubmit = (e) => {
    e.preventDefault();
    navigate("/editprofile");
  };

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  let setProfile = (profile) => {
    console.log(profile);
    setDisplayProfile({
      ...profile,
      aboutMe: profile.aboutMe,
      favGenres: profile.favGenres,
      favAlbum: profile.favAlbum,
      favSongs: profile.favSongs,
    });
  };

  let getProfile = async () => {
    let profileToGrab = await fetch(
      process.env.REACT_APP_BACKEND_SERVER + "/muse/userPage",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    let profileToDisplay = await profileToGrab.json();

    if (profileToDisplay) {
      setProfile(profileToDisplay);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem("currentUsername").toUpperCase());
    console.log(displayProfile);
  }, [displayProfile]);

  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  return (
    <>
      <NavBar />
      { displayProfile && <SignedInUserCard username={localStorage.getItem('currentUsername')} displayProfile={displayProfile} handleNavToEdit={handleCreateSubmit}/>}
    </>
  );
};

export default UserProfile;
