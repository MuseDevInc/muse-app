import { useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Typography,
  DialogTitle,
  Slide,
} from "@mui/material";
import { ChatBubbleOutlineRounded } from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function MatchDialog({
  match,
  setMatch,
  advanceQ,
  userToMessage,
}) {
  const handleClose = () => {
    setMatch(false);
    advanceQ();
  };
  useEffect(() => {
    console.log(userToMessage);
  });
  return (
    <div>
      {match ? (
        <Dialog
          open={match}
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-describedby="match alert dialog"
          sx={{ opacity: ".98" }}
        >
          <Paper elevation={20}>
            <DialogTitle>{"Match!"}</DialogTitle>
            <DialogContent>
              <Typography /* sx={{paddingRight: "5vw"}} */ variant="h5">
                Start a conversation, or keep swiping!
              </Typography>
            </DialogContent>
            <DialogActions
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button
                variant="outlined"
                component={Link}
                to="/messenger"
                onClick={handleClose}
              >
                <ChatBubbleOutlineRounded />
                Message
              </Button>
              <Button onClick={handleClose} variant="outlined">
                Next
              </Button>
            </DialogActions>
          </Paper>
        </Dialog>
      ) : (
        " "
      )}
    </div>
  );
}
