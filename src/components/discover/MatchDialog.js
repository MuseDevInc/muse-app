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
  Box,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function MatchDialog({ match, setMatch, advanceQ, userToMessage }) {
  const handleClose = () => {
    setMatch(false);
    advanceQ();
  };
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
              <Box sx={{borderStyle:"solid", borderRadgius:"5px", borderWidth:"3px",borderColor:"#94d1be", background:"#94d1be", padding:"2%", display:"flex", alignItems: "center", justifyContent:"center"}} >
                <Typography variant="h3" sx={{color:"#FFFFFF", fontWeight:"bold"}}>
                  MATCHED!
                </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
              <Typography variant="h6" textAlign="center">
                Start a conversation, or keep swiping!
              </Typography>
            </DialogContent>
            <DialogActions
              sx={{ width: "100%", display: "flex", justifyContent: "stretch", alignItems:"stretch" }}
            >
              <Button
                component={Link}
                to="/messenger"
                onClick={handleClose}
                sx={{width:"100%", background:"#00377C", color:"#ffffff", margin:"0 2%", padding:"4% 0"}}
              >
                Message
              </Button>
              <Button onClick={handleClose} sx={{width:"100%", background:"#00377C", color:"#ffffff", margin:"0 2%", padding:"4% 0"}}>
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
