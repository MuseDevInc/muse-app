import React, { useState, useEffect } from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import { CardMedia } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShowMore from './ShowMore.js'

/* import Image from  "./../../Late_registration_cd_cover.jpeg" */
let albumImage =
  "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f";

export const AlbumContainer = ({ currentPosition, userQueue }) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    console.log()
    setShowMore(true)
  }

  useEffect(() => {
    console.log(currentPosition);
    console.log(userQueue);
  });


  return (
    <Card elevation={0} sx={{ maxWidth: "100%", borderRadius: "13" }}>
      <IconButton  onClick={handleShowMore}>
        <MoreVertIcon />
      </IconButton>

      <CardMedia
        component="img"
        alt="favorite album"
        image={userQueue[currentPosition].favSongs[0].albumUrl}
      />
      <ShowMore currentPosition={currentPosition} userQueue={userQueue} showMore={showMore} setShowMore={setShowMore} />
    </Card>
  );
};
