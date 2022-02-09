import React from "react";
import { Paper, Container, Box, Typography, Card } from "@mui/material";
import { CardMedia } from "@mui/material";
/* import Image from  "./../../Late_registration_cd_cover.jpeg" */
let albumImage =
  "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f";
  
export const AlbumContainer = () => {
  return (
    <Card elevation={0} sx={{ maxWidth: "100%", borderRadius: "13" }}>
      <CardMedia component="img" alt="favorite album" image={albumImage} />
    </Card>
  );
};
