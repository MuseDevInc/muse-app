import React, { useState } from "react";
import { Card, IconButton, CardMedia } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShowMore from "./ShowMore.js";

export const AlbumContainer = ({ currentPosition, userQueue }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Card elevation={0} sx={{ maxWidth: "100%", borderRadius: "13" }}>
      <CardMedia
        component="img"
        alt="favorite album"
        image={userQueue[currentPosition].favSongs[0]?.albumUrl}
      />
      <IconButton onClick={handleShowMore}>
        <MoreVertIcon />
        More about {userQueue[currentPosition].owner?.username}
      </IconButton>
      <ShowMore
        currentPosition={currentPosition}
        userQueue={userQueue}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    </Card>
  );
};
