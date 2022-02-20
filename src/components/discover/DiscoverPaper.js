import {Paper} from "@mui/material"
import { AlbumContainer } from "./AlbumContainer";;

export function DiscoverPaper ({currentPosition, userQueue}) {

  return (
    <>
     <Paper elevation={16} sx={{marginTop:"1.5rem", marginX: "1rem", maxWidth: "85%", flexBasis: "auto" }} > 
        <AlbumContainer currentPosition={currentPosition} userQueue={userQueue}/>
    </Paper>
   </>
  );
};
