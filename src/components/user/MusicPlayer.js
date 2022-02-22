import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


export default function MusicPlayer({song, setCurrentPlayback}) {

  const handleClick = () => {
    setCurrentPlayback(song.uri)
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: "column"}} onClick={handleClick}>
      <CardMedia
        component="img"
        sx={{ width: "100%"}}
        image={song.albumUrl}
        alt={song.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    </Card>
  );
}
