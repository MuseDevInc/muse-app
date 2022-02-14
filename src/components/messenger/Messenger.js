import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Conversation from '../conversations/Conversation'
// import {format} from 'timeago.js'
// {format(message.createdAt)}
import './messenger.css'
import { io } from 'socket.io-client'
const Messenger = ({currentUser}) => {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [socket, setSocket] = useState(null)
  const [newMessage, setNewMessage] = useState("")
// let userId = '6206e85dad4b62bf69b66099'
//get the conversations our userId is a part of.
const getConversations = async () => {
  try{
  const res = await axios.get(process.env.REACT_APP_BACKEND_SERVER+"/conversation/"+currentUser.currentUserId)
  console.log(res)
  setConversations(res.data)
  }
  catch(err){
    console.log(err)
  }
}
//on mount, get all conversations userId is a part of
  useEffect(() => {
    getConversations()
  },[])


   //Whenever currentChat changes, get the messages from the new conversation clicked and set messages to be those messages
  useEffect(() => {
    const getMessages = async () => {
    try{
    
      const res = await axios.get('/messages/'+currentChat._id)
      console.log(res)
      setMessages(res.data)
      
    }
    catch(err){
      console.log(err)
    }
  }
 
  },[currentChat])

  useEffect(() => {
    //ws is for websocket. Socket.io uses websocket protocol.
    setSocket(io("ws://localhost:8900"))
  },[])

  useEffect(() => {
    //Whenever socket recieves welcome request, console.log message
    socket?.on("welcome", message => {
      console.log(message)
    })
  },[socket])


//When message is sent, send message object. Post that to our messages db. Then displays messages on current conversation to be current messages plus new message.
//Clear newMessage field. (textarea)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      sender: currentUser.currentUserId,
      text:newMessage,
      conversationId: currentChat.id
    }
    try{
      const res = await axios.post('/messages', message)
      setMessages([...messages, res.data])
      setNewMessage('')

    }
    catch(err){
      console.log(err)
    }
  }
  return (
    // <div className={own ? "message own" : "message"}>
    //If no currentChat is selected, send a p tag, else show the currentConversation selected
    <div>
      {currentChat ?
      <>
    <div className="messageTop">
      <img
        className="messageImg"
        src="https://m.media-amazon.com/images/I/51fyG9o+1lL._AC_SL1000_.jpg"
        alt=""
      />
      {/* When a conversation is clicked, set the current chat to be that conversation. */}
         {conversations.map((convo) => {
        <div onClick={() => setCurrentChat(convo)}>
          <Conversation conversation={convo}  currentUser={currentUser}/>
        </div>
         })}
    </div>
    <div>Created at this time: Vamoss</div>
      </> : <p>Open a conversation to start chatting!</p>}



    {/* When someone writes a message, run handleSubmit to submit that message */}
    <textarea
    placeholder='Write a message'
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    >
    
    </textarea>
    <button onClick={handleSubmit()}>Send</button>
  </div>
)
}

export default Messenger