import { useState, useEffect } from 'react'
import Message from "./Message"
import {UserContext} from "./UserContext"
import './App.css'

const App: React.FC = () => {
  const [userName, setUserName] = useState <string> ('User1')
  const [userMessage, setUserMessage] = useState <string> ('this is the initial message')
  useEffect(() => {
    
    const timer = setTimeout (() => {
    setUserName("User2")
    setUserMessage("another message after the initial one and using typescript")
  }, 5000)  
    return () => clearTimeout(timer)
  }, [])
  return (
      <>   
      <UserContext.Provider value={{name: userName, message:userMessage}}>
        <h1>Typescript is cool</h1>
        <Message/>
      </UserContext.Provider>
      </>
  );
}

export default App
