import * as React from 'react';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Paper, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import NextPlanIcon from "@mui/icons-material/NextPlan";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { ChatBubbleOutlineRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MatchDialog({ match, setMatch, advanceQ, userToMessage }) {



  const handleClose = () => {
    setMatch(false)
    advanceQ()
  };
  useEffect(()=> {
    console.log(userToMessage)
  })
  return (
    <div>
      <Dialog
        open={match}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="match alert dialog"
      >
          <Paper elevation={20} >
        <DialogTitle>{"Match!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Typography  /* sx={{paddingRight: "5vw"}} */ variant="h5">
           Start a conversation, or keep swiping!
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{display: "flex", justifyContent: "space-around"}}>
          <Button variant="outlined" component={Link} to="/messenger" onClick={handleClose} sx={{justifySelf: "flex-start"}}><ChatBubbleOutlineRounded/>Message</Button>
          <Button onClick={handleClose} variant="outlined" sx={{justifySelf: "flex-end"}}>Next</Button>
        </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
}