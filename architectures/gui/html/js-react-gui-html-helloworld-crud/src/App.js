import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ListPage } from "./pages/ListPage"
import { CreatePage } from "./pages/CreatePage"
import { ViewPage } from "./pages/ViewPage"
import { UpdatePage } from "./pages/UpdatePage"
import { DeletePage } from "./pages/DeletePage"

function App() {

  // localStorage.setItem("MESSAGES", JSON.stringify([]))

  const [selectedMessage, setSelectedMessage] = useState(null)
  
  const [selectedMessageId, setSelectedMessageId] = useState("")

  const [messages, setMessages] = useState(() => {
    const localValue = localStorage.getItem("MESSAGES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("MESSAGES", JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    const selectedMessage = getMessage(selectedMessageId)
    setSelectedMessage(selectedMessage)
  }, [selectedMessageId])

  function addMessage(message) {
    setMessages(currentMessages => {
      return [
        ...currentMessages,
        { id: crypto.randomUUID(), text: message },
      ]
    })
  }

  function getMessage(id) {

    return messages.find(message => {
      if (message.id == id) {
        return message
      } else {
        return null
      }      
    })

  }

  function updateMessage(id, text) {

    return messages.map(message => {
      if (message.id == id) {
        message.text = text
      }       
    })

  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ListPage selectedMessage={selectedMessage} messages={ messages } setSelectedMessageId={ setSelectedMessageId } /> } />
            <Route path="/create" element={ <CreatePage addMessage={ addMessage } setSelectedMessage={ setSelectedMessage } /> } />
            <Route path="/view" element={ <ViewPage selectedMessage={ selectedMessage } setSelectedMessage={ setSelectedMessage } /> } />
            <Route path="/update" element={ <UpdatePage selectedMessage={selectedMessage} setSelectedMessage={ setSelectedMessage } updateMessage={ updateMessage } /> } />
            <Route path="/delete" element={ <DeletePage selectedMessage={ selectedMessage } setSelectedMessage={ setSelectedMessage } /> } />
            <Route path="/*" element={ <NotFoundPage setSelectedMessage={ setSelectedMessage } /> } />            
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
