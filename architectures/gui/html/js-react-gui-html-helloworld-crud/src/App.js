import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ListPage } from "./pages/ListPage"
import { CreatePage } from "./pages/CreatePage"
import { ViewPage } from "./pages/ViewPage"
import { UpdatePage } from "./pages/UpdatePage"
import { DeletePage } from "./pages/DeletePage"

function App() {

  const [messages, setMessages] = useState(() => {
    const localValue = localStorage.getItem("MESSAGES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("MESSAGES", JSON.stringify(messages))
  }, [messages])

  function addMessage(message) {
    setMessages(currentMessages => {
      return [
        ...currentMessages,
        { id: crypto.randomUUID(), message },
      ]
    })
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ListPage /> } />
            <Route path="/create" element={ <CreatePage addMessage={addMessage}/> } />
            <Route path="/view" element={ <ViewPage /> } />
            <Route path="/update" element={ <UpdatePage /> } />
            <Route path="/delete" element={ <DeletePage /> } />
            <Route path="/*" element={ <NotFoundPage /> } />            
        </Routes>
    </BrowserRouter>
  );
  
}

export default App;
