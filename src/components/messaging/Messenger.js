import React from 'react'
import './messenger.css'
const Messenger = () => {
  return (
    // <div className={own ? "message own" : "message"}>
    <div>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://m.media-amazon.com/images/I/51fyG9o+1lL._AC_SL1000_.jpg"
        alt=""
      />
      {/* <p className="messageText">{message.text}</p> */}
          <p>Message I sent</p>
    </div>
    <div>Created at this time: Vamo</div>
    {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
  </div>
)
}

export default Messenger