import { useState } from "react"
import { UpdateContentComponent } from "../components/UpdateContentComponent";
import { BackLink } from "../components/BackLink";

export function UpdatePage({ selectedMessage, setSelectedMessage }) {

  const [newMessage, setNewMessage] = useState(selectedMessage.text)

  return (
    <>
      <h4>Update Message</h4>
      <UpdateContentComponent selectedMessage={ selectedMessage } newMessage={ newMessage } setNewMessage={ setNewMessage } />
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
