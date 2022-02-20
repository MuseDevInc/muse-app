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
  Alert,
  Box,
} from "@mui/material";
import { ChatBubbleOutlineRounded } from "@mui/icons-material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function MatchDialog({ match, setMatch, advanceQ, userToMessage }) {
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
            <DialogTitle>
              <Box sx={{borderStyle:"solid", borderRadius:"5px", borderWidth:"3px",borderColor:"#658421", padding:"2%", display:"flex", alignItems: "center", justifyContent:"center"}} >
                <Typography variant="h3" sx={{color:"#658421", fontWeight:"bold"}}>
                  MATCH!
                </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
              <Typography variant="h5" textAlign="center">
                Start a conversation, or keep swiping!
              </Typography>
            </DialogContent>
            <DialogActions
              sx={{ width: "100%", display: "flex", justifyContent: "stretch", alignItems:"stretch" }}
            >
              <Button
                variant="filled"
                component={Link}
                to="/messenger"
                onClick={handleClose}
                sx={{width:"100%", background:"#00377C", color:"#ffffff", margin:"0 2%"}}
              >
                Message
              </Button>
              <Button onClick={handleClose} variant="filled" sx={{width:"100%", background:"#00377C", color:"#ffffff", margin:"0 2%"}}>
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
