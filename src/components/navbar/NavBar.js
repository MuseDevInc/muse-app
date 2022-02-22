import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import { OpenChat } from "./OpenChat";
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import GridContainer from '@mui/material/Grid';
import logo from "../alphabet.png";
import axios from "axios";

//either above component or within, should only matter if there were multiple instances of the function component in the app. const dropDownPageArray = [ <ProfilePage/> , <LogOutButton/> ] ???
// Pass UserID as props, store ID in a Ref (useRef hook)--get the page what it needs.

export function NavBar() {
  let navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const iconSizeBig = `sx={{ fontSize: "3.5rem" }}`;
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    let destroySession = await axios.delete(
      process.env.REACT_APP_BACKEND_SERVER + "/session/logout"
    );
    console.log(destroySession.data);
    localStorage.removeItem("currentUsername");
    localStorage.removeItem("currentUserId");
    navigate("/");
  };

  return (
    <Box sx={{ alignContent: 'flex-start' }}>
      <AppBar position="sticky" >
      {auth && (
        <Toolbar variant="regular" sx={{alignItems:'space-between', background:"#00377C"}}>
          {/* auth condition !! */}
              <Box sx={{flexGrow: 1, alignContent: 'center'}}>
              <IconButton
                href="/main"
                size="large"
                aria-label="discover"
                aria-controls="discover-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <img src={logo} style={{ maxHeight: "2.25rem", }} alt="logo" />use
              </IconButton>
              </Box>

              {/*OpenChat is here. Decide if we want a Dialog modal or to use react router*/}
              <Box sx={{ display: 'flex', justifyContent:'flex-end',flexGrow:1}}>
                <IconButton href="/messenger" color="inherit">
                  <EmailIcon sx={{ fontSize: "2.50rem" }} />
                </IconButton>
                {/*IconButton re: Discover feature...*/}
                {/* User Dropdown IconButton */}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle sx={{ fontSize: "2.50rem" }} />
                </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                /*blur is below this line */
                sx={{ backdropFilter: "blur(2px)" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/*Only here for placeholder / testing, should .map over a "userPages" with props that provide reference to (or provide data of) "currentUser.userId". FYI: icons in MenuItem are possible as well */}
                <Link to="/userprofile" sx={{textDecoration:'none'}}>
                  <MenuItem onClick={handleClose}>View profile</MenuItem>
                </Link>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
              </Box>
      </Toolbar>
      )}
    </AppBar>
    </Box >
  );
}
