import React from "react";
import { Paper, Container } from "@mui/material";
import Image from  "./../../Late_registration_cd_cover.jpeg"
export const AlbumContainer = () => {
  return (
    <Container
      elevation={24}
      sx={{
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "20rem",
        maxHeight: "20rem",
      /*   background: "silver", */
        backgroundImage: `url(${Image})`,
        /* backgroundSize: "80%", */
        backgroundRepeat: "no-repeat",
        
      }}
    >
    </Container>
  );
};
