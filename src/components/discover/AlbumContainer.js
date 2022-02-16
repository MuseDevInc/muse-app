import React, { useState} from "react";
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
import  ShowMore  from "./ShowMore.js";

/* import Image from  "./../../Late_registration_cd_cover.jpeg" */

  export const AlbumContainer = ({ currentPosition, userQueue}) => {
    const [showMore, setShowMore] = useState(false)
  
  
    const handleShowMore = () => {
      console.log()
      setShowMore(true)
    }
  
  
    return (
      <Card elevation={0} sx={{ maxWidth: "100%", borderRadius: "13" }}>
        <CardMedia component="img" alt="favorite album"image={userQueue[currentPosition].favSongs[0].albumUrl} />
        <IconButton  onClick={handleShowMore}>
          <MoreVertIcon />
        </IconButton>
        <ShowMore currentPosition={currentPosition} userQueue={userQueue} showMore={showMore} setShowMore={setShowMore} />
      </Card>
    );
  };
