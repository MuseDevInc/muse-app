import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function SongCardDisplay({ track, handleClick }) {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", alignItems: "center" }}>
      <IconButton aria-label="remove" onClick={handleClick} >
        <DeleteIcon sx={{ height: 38, width: 38 }}/>
      </IconButton>
      <CardMedia
        component="img"
        sx={{ height: 64, width: 64 }}
        image={track.albumUrl}
        alt={track.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="p">
            {track.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {track.artist}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
