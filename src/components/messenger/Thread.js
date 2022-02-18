import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Message from "./Message";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Thread({
  openThread,
  setOpenThread,
  newMessage,
  setNewMessage,
  handleSubmit,
  messages,
  scrollRef,
  currentUser,
  currentFriend,
}) {
  const handleClose = () => {
    setOpenThread(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openThread}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "sticky" }}>
          <Toolbar>
            <Avatar>
              <img
                height="175%"
                src={currentFriend?.favSongs[0].albumUrl}
                alt={currentFriend?.favSongs[0].title}
              />
            </Avatar>

            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {currentFriend?.owner.username}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {messages?.map((m) => (
          <div ref={scrollRef}>
            <Message
              message={m}
              own={m.sender === currentUser.currentUserId}
              currentFriend={currentFriend}
            />
          </div>
        ))}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"stretch", padding: "1rem" }}>
          <TextField
            // renderInput
            fullWidth
            placeholder="Write a message"
            value={newMessage}
            onChange={(e) => {
              console.log(e.target.value);
              setNewMessage(e.target.value);
            }}
            position="sticky"
          ></TextField>

          <Button onClick={handleSubmit} variant="contained" sx={{marginLeft: "3%"}} >
            <ArrowCircleUpOutlinedIcon size='large'/>
            Send
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
