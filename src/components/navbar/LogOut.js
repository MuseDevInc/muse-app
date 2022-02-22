import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogOutAlert({openLogoutDialog, setOpenLogoutDialog}) {
  let navigate = useNavigate();

  const handleClose = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogOut = () => {
    fetch(process.env.REACT_APP_BACKEND_SERVER+"/session/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    }).then((res) => {
      console.log(res);
    });
    setOpenLogoutDialog(false);
    localStorage.removeItem("currentUsername");
    localStorage.removeItem("currentUserId");
    navigate("/");
  };

  return (
    <div>
      <Dialog
        open={openLogoutDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Log Out?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleLogOut}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
