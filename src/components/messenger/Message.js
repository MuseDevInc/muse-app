import React from 'react'
import './message.css'
const Message = ({message, own, currentFriend}) => {
  return (
    <div className={own ? "message own" : "message otherPerson"}>
    <div className="messageTop">
      <img
        className="messageImg"
        src={!own && currentFriend.favSongs[0].albumUrl}
        alt={own ? "me" : currentFriend.favSongs[0].title}
      />
      <p className="messageText">{message.text}</p>
    </div>
    <div className="messageBottom">{message.createdAt}</div>
  </div>
)
}

export default Message