import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function MusicPlayer({song}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: "column"}}>
      <CardMedia
        component="img"
        sx={{ width: "100%"}}
        image={song.albumUrl}
        alt={song.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="text">
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{fontSize:"large"}} />
          </IconButton>
            {song.artist}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {song.title}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    </Card>
  );
}
