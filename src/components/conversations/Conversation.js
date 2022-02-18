import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";


import "./conversation.css";
//THIS PAGE IS TO GET THE USER PROFILE PIC AND USERNAME TO DISPLAY IN THE CONVERSATIONS.
const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  // let conversation = '6207e2bac193648657ae59f6' //This is the id of the conversation
  // let currentUser = '6206e85dad4b62bf69b66099' //This is the id of the current user, (christian)

  useEffect(() => {
    //Two members in a conversation, the one that is not currentUser is the other member.
    const friendId = conversation.members.find(
      (m) => m !== currentUser.currentUserId
    );
    //get user profile, will add friend profiel as well later.
    const getUserProfile = async () => {
      try {
        console.log(friendId);
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_SERVER + "/muse/getUsers/" + friendId
        );
        console.log(res.data);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserProfile();
  }, []);
  return (
    <div className="conversation">
      <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img height="150%" src={user?.favSongs[0].albumUrl} alt={user?.favSongs[0].title}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={user?.owner.username}
                />
      </ListItem>
    </div>
  );
};

export default Conversation;
