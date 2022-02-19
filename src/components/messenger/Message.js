import React from 'react'
import TimeAgo from 'react-timeago'
import './Message.css'
const Message = ({message, own, currentFriend}) => {
  return (
    <div className={own ? "message own" : "message otherPerson"} key={`${message._id}${message.createdAt}`}>
    <div className="messageTop" key={`${message._id}dev`}>
      { !own && currentFriend && <img
        className="messageImg"
        src={currentFriend ? currentFriend.favSongs[0].albumUrl : null}
        alt={currentFriend?.favSongs[0].title}
        key={`${message._id}img`}
      />}
      <p className="messageText" key={`${message._id}text`}>{message.text}</p>
    </div>
    <TimeAgo date={message.createdAt} live={true} maxPeriod="30s" key={`${message._id}time`}/>
  </div>
)
}

export default Message