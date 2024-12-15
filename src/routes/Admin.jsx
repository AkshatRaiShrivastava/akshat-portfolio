import { toast } from "sonner";

import axios from "axios";
import React,{ useState, useEffect } from "react";

const Admin = ()=>{
    
        // State to store messages
        const [messages, setMessages] = useState([]);
      
        // Fetch messages when the component mounts
        
          // Fetch data from the backend
          const fetchMessages = async () => {
            try {
              const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/messages`);
              setMessages(response.data);
            } catch (error) {
              console.error("Error fetching messages:", error);
            }
          };
      
          fetchMessages();
     // Empty dependency array, so it runs only once when the component mounts
      
        // Handle delete
        const deleteMessage = async (id) => {
          try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/message/${id}`);
            // Remove deleted message from the state
            // setMessages(messages.filter((message) => message.id !== _id));
            toast("Message deleted !")
            fetchMessages()
          } catch (error) {
            console.error("Error deleting message:", error);
          }
        }
    
    return(
        <>
        <h1 className="text-2xl text-neutral-200">{messages.length == 0?"No messages":"Your Messages"}</h1>
        <div className="grid-cols-1 lg:grid grid-cols-2 h-auto gap-7 mt-10 mb-10">
        
          {messages.map((message) => (
            <div className="border border-neutral-500 rounded-3xl p-3" key={message.index}>
                <h1>Name : {message.name}</h1>
                <h1>Email : {message.email}</h1>
                <p className="text-base text-neutral-400">{message.message}</p>
                <h4 className="text-sm text-neutral-600">Time : {message.createdAt}</h4>
                <button className="bg-red-500 px-2 rounded-2xl mt-2 justify-center text-neutral-300" onClick={()=>deleteMessage(message._id)}>Delete</button>
            </div>
          ))}
        
      
        </div>
        </>
    )
}

export default Admin


