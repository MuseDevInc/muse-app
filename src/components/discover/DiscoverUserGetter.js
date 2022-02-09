import React from 'react';
import { DiscoverPaper } from './DiscoverPaper';

import { ThumbDownOffAltRounded, ThumbUp } from '@mui/icons-material';
import { Box } from '@mui/material';
function DiscoverUserGetter() {
    //swipe handler
    //fetch
    //userQueue
    //state management

  return( 
  <Box
/*   sx={{display: "flex", alignItems: "center"}}  */>
    <ThumbDownOffAltRounded/>
    <DiscoverPaper/>
    <ThumbUp/>
    </Box>

  )
}

export default DiscoverUserGetter;
