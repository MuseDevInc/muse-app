import {Paper, Card, Typography, Container} from "@mui/material"
import { AlbumContainer } from "./AlbumContainer";
import { MatchedUserTabs } from "./MatchedUserTabs";

export const DiscoverPaper = ({currentPosition, userQueue}) => {

  return (
    <Card elevation={16} sx={{borderRadius: 5, marginTop:"1.5rem", marginX: "1rem", maxWidth: "85%", flexBasis: "auto", }} >
   
  {/*       <MatchedUserTabs sx={{flex: "5"}}/> */}
        <AlbumContainer currentPosition={currentPosition} userQueue={userQueue}/>
{/*         <Typography variant="h3">Christian Staubo</Typography> */}
    
    </Card>
  );
};
