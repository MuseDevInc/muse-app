import React from 'react';
import { Avatar, IconButton } from '@mui/material';

let randomNum = ((Math.random)*100)
let user = {
    id: randomNum,
    name: "strang"
}
function NextAvatar() {

  return (
      <>
      <IconButton  onClick={(e) => {console.log(e.target.id)}}>
      <Avatar id={user.id} alt="user" src= "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f" sx={{height: "4.5rem", width: "4.5rem"}} />
      </IconButton>
      </>
  );
}

export default NextAvatar;



