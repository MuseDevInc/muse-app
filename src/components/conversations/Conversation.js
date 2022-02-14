import React, { useEffect, useState } from 'react'
import axios from "axios"

//THIS PAGE IS TO GET THE USER PROFILE PIC AND USERNAME TO DISPLAY IN THE CONVERSATIONS.
const Conversation = ({conversation, currentUser}) => {
    const [user, setUser] = useState(null);
    // let conversation = '6207e2bac193648657ae59f6' //This is the id of the conversation
    // let currentUser = '6206e85dad4b62bf69b66099' //This is the id of the current user, (christian)

  useEffect(() => {
      //Two members in a conversation, the one that is not currentUser is the other member.
    const friendId = conversation.members.find((m) => m !== currentUser.currentUserId);
    //get user profile, will add friend profiel as well later.
    const getUserProfile = async () => {
      try {
        const res = await axios(process.env.REACT_APP_BACKEND_SERVER+"/muse/"+currentUser.currentUserId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserProfile();
  }, [currentUser, conversation]);
  return (
    <div>
        <img src="https://m.media-amazon.com/images/I/51fyG9o+1lL._AC_SL1000_.jpg" alt='ProfilePic'></img>
        <p>{currentUser?.currentUsername}</p>
    </div>
  )
}

export default Conversation