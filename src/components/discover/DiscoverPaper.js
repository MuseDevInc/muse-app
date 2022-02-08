import {Paper, Card, Typography, Container} from "@mui/material"
import { AlbumContainer } from "./AlbumContainer";
import { MatchedUserTabs } from "./MatchedUserTabs";

export const DiscoverPaper = () => {

  return (
    <Card elevation={16} sx={{maxWidth: "70%", borderRadius: 5, marginTop:"1.5rem"}} >
        <Container>
        <MatchedUserTabs/>
        <AlbumContainer/>
        </Container>
    </Card>
  );
};
