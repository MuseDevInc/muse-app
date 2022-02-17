import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Conversation from '../conversations/Conversation'
// import {format} from 'timeago.js'
// {format(message.createdAt)}
import './messenger.css'
import { io } from 'socket.io-client'
import { NavBar } from '../navbar/NavBar'

import Message from './Message'
const Messenger = ({currentUser}) => {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  // const [socket, setSocket] = useState(null)
  const [newMessage, setNewMessage] = useState("")
  const socket = useRef()
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const scrollRef = useRef()
// let userId = '6206e85dad4b62bf69b66099'


//get the conversations our userId is a part of.
const getConversations = async () => {
  try{
  console.log(currentUser)
  const res = await axios.get(process.env.REACT_APP_BACKEND_SERVER+"/conversation/"+currentUser.currentUserId)
  console.log(res)
  setConversations(res.data)
  }
  catch(err){
    console.log(err)
  }
}
const getMessages = async () => {
  try{
  
    const res = await axios.get(process.env.REACT_APP_BACKEND_SERVER+'/message/'+currentChat._id)
    console.log(res)
    setMessages(res.data)
    
    
  }
  catch(err){
    console.log(err)
  }
}
//on mount, get all conversations userId is a part of
  useEffect(() => {
    getConversations()
  },[])

  useEffect(() => {
    console.log('These are the convos:',conversations)
  },[conversations])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})

  },[messages])

   //Whenever currentChat changes, get the messages from the new conversation clicked and set messages to be those messages
  useEffect(() => {
    console.log(currentChat)
    getMessages()
 
  },[currentChat])

  // useEffect(() => {
  //   //ws is for websocket. Socket.io uses websocket protocol.
  //   setSocket(io("ws://localhost:8900"))
  // },[])




  //SOCKET STUFF

  useEffect(() => {
    socket.current = io("ws://localhost:8900");

    //Syntax looks a bit different here because we're hitting database, which taktes sender and text instead of senderId and text
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })
  }, [])

  useEffect(() => {
    //This bit of logic here is so that when someone else sends us a message, it won't display that to us unless we click that conversation. Without it, whenever a message is sent to us, our conversation changes to that message.
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // useEffect(() => {
  //   //Whenever socket recieves welcome request, console.log message
  //   socket?.on("welcome", message => {
  //     console.log(message)
  //   })
  // },[socket])
  


  //Every time a user logs in, add that created user to socket and match socket id with user id
  useEffect(() => {
    socket.current.emit("addUser", currentUser.currentUserId)
    socket.current.on("getUsers", users => {
      console.log(users)
    })
  },[currentUser])


//When message is sent, send message object. Post that to our messages db. Then displays messages on current conversation to be current messages plus new message.
//Clear newMessage field. (textarea)
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newMessage)
    const message = {
      sender: currentUser.currentUserId,
      text:newMessage,
      conversationId: currentChat._id
    }
    

    const receiverId = currentChat.members.find((member) => member !== currentUser.currentUserId)
    console.log(receiverId)
    
    //sendMessage, this hits socket server and will send message to recieverId
    socket.current.emit("sendMessage", {
      senderId: currentUser.currentUserId,
      receiverId: receiverId,
      text: newMessage
    })
    try{
      const res = await axios.post(process.env.REACT_APP_BACKEND_SERVER+'/message', message)
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
    <NavBar />
     
    <div className='chatBox'>
      <div className='chatBoxWrapper'>
      {/* When a conversation is clicked, set the current chat to be that conversation. */}
         {conversations?.map((convo) => {
       return <div onClick={() => setCurrentChat(convo)}>
          <Conversation conversation={convo}  currentUser={currentUser}/>
        </div>
         })}
    </div>
    </div>
      



    {/* When someone writes a message, run handleSubmit to submit that message */}
    {currentChat ?
      <>
      <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === currentUser.currentUserId} />
                    </div>
                  ))}
                </div>
                <textarea
    placeholder='Write a message'
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    >
    
    </textarea>
    <button onClick={handleSubmit}>Send</button>
                </> : <p className='noConvoOpened'>Open a conversation to start chatting!</p>}
    
    
  </div>
  
)
}

export default Messenger