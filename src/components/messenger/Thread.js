import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
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
import { motion } from "framer-motion";

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
  setShowFriendProfile,
}) {
  const handleClose = () => {
    setOpenThread(false);
  };

  return (
    <Dialog
      key={currentUser.currentUserId}
      fullScreen
      open={openThread}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar
        sx={{
          position: "sticky",
          height: "7vh",
          background: "#00377C",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Avatar>
            <img
              height="175%"
              src={currentFriend ? currentFriend.favSongs[0].albumUrl : null}
              alt={currentFriend ? currentFriend.favSongs[0].title : null}
              onClick={() => setShowFriendProfile(true)}
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

      <Box sx={{ height: "80vh", overflow: "scroll" }}>
        {messages?.map((m) => (
          <motion.div
            key={`${m._id}1`}
            ref={scrollRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Message
              message={m}
              own={m.sender === currentUser.currentUserId}
              currentFriend={currentFriend}
              key={m._id}
            />
          </motion.div>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          bottom: "0px",
          height: "12vh",
          width: "100vw",
        }}
      >
        <TextField
          // renderInput
          fullWidth
          color="primary"
          variant="outlined"
          label="Message"
          autoComplete="off"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        ></TextField>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ marginLeft: "1rem", height: "3.5rem", width: "6.8rem" }}
        >
          <ArrowCircleUpOutlinedIcon size="large" />
          Send
        </Button>
      </Box>
    </Dialog>
  );
}
