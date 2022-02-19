import React from 'react'
import TimeAgo from 'react-timeago'
import './Message.css'
const Message = ({message, own, currentFriend}) => {
  return (
    <div className={own ? "message own" : "message otherPerson"}>
    <div className="messageTop">
      { !own && currentFriend && <img
        className="messageImg"
        src={currentFriend ? currentFriend.favSongs[0].albumUrl : null}
        alt={currentFriend?.favSongs[0].title}
        key={`${message._id}${message.createdAt}`}
      />}
      <p className="messageText">{message.text}</p>
    </div>
    <TimeAgo date={message.createdAt} live={true} maxPeriod="30s"/>
  </div>
)
}

export default Message