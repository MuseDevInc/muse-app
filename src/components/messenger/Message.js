import React from 'react'
import './message.css'
const Message = ({message, own}) => {
  return (
    // <p>I return</p>
    <div className={own ? "message own" : "message else"  }>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://m.media-amazon.com/images/I/51fyG9o+1lL._AC_SL1000_.jpg"
        alt="squids"
      />
      <p className="messageText">{message.text}</p>
    </div>
    <div className="messageBottom">{message.createdAt}</div>
  </div>
)
}

export default Message