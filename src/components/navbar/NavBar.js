import * as React from "react";
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
    <Box sx={{ alignContent: 'flex-start'  }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      {/*we can do more positioning here, active sx override below right now, change flex property 
      We should establish breakpoints either in theme or inline*/}
      <AppBar position="sticky">
        <Toolbar variant="regular">
          {/* auth condition !! */}
          {auth && (
            <div>

              {/* <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}> */}

              <IconButton
                href="/main"
                size="large"
                aria-label="discover"
                aria-controls="discover-appbar"
                aria-haspopup="true"
                /* onClick={} */
                color="inherit"
                sx={{ p: 0 }}
              >
                
                <img src={logo} style={{ maxHeight: "2.25rem",}}  alt="logo" />
                
              </IconButton> 

              {/* </Box> */}
              {/*OpenChat is here. Decide if we want a Dialog modal or to use react router*/}

              <Box sx={{display: 'inline-block', position:'fixed', right: '0', marginTop: '0'}}>              
              <IconButton href="/messenger" color="inherit">
                {/* <img src={logo} style={{ maxHeight: "5rem" }} alt="logo" /> */}

                <EmailIcon sx={{ fontSize: "2.50rem"}} />

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
                sx={{ p: 0 }}
              >
                <AccountCircle sx={{ fontSize: "2.50rem" }} />
              </IconButton>
              </Box>


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
                <Link to="/userprofile">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
