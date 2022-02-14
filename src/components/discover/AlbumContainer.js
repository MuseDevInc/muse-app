import React, { useEffect } from "react";
import { Paper, Container, Box, Typography, Card } from "@mui/material";
import { CardMedia } from "@mui/material";
/* import Image from  "./../../Late_registration_cd_cover.jpeg" */
let albumImage =
  "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f";
  
export const AlbumContainer = ({currentPosition, userQueue}) => {
  useEffect(()=> {
    console.log(currentPosition)
    console.log(userQueue)
        })
  return (

    <Card elevation={0} sx={{ maxWidth: "100%", borderRadius: "13" }}>
      <CardMedia component="img" alt="favorite album" image={userQueue[currentPosition].favSongs[0].albumUrl} />
    </Card>
  );
};
