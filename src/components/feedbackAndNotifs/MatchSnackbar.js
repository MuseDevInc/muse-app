import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Typography, IconButton, Icon } from "@mui/material";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Chat } from "@mui/icons-material";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MatchSnackbar({ match, setMatch, advanceQ }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMatch(false);
    advanceQ()
  };

  return (
    <Snackbar
      open={match}
      autoHideDuration={6000}
      onClose={handleClose}
      display="flex"
      sx={{alignItems: "center"}}
    >
      <Alert onClose={handleClose}  sx={{ width: "100vw", backgroundColor: "black"}}>
        <Stack direction="row"  spacing={{ xs: 1, sm: 2, md: 4 }}> 
        <Typography /* sx={{paddingRight: "5vw"}} */ variant="h5">Match!</Typography>
      
        {/* <IconButton ><ChatBubbleOutlineIcon></ChatBubbleOutlineIcon></IconButton>
        <IconButton><NextPlanIcon></NextPlanIcon></IconButton> */}
        <Button variant="contained" startIcon={<ChatBubbleOutlineIcon/>}>Message</Button>
        <Button variant="contained" startIcon={<NextPlanIcon/>}>Next</Button>
        </Stack>
      </Alert>
    </Snackbar>
  );
}
