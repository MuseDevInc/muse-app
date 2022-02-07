import { IconButton } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"

import React from 'react';

export function OpenChat() {
  return (

<IconButton
                size="large"
                aria-label="open messages"
                aria-controls="chat-appbar"
                aria-haspopup="true"
                /* onClick={} */
                color="inherit"
              >
                <ChatIcon />
              </IconButton>
  )
}


