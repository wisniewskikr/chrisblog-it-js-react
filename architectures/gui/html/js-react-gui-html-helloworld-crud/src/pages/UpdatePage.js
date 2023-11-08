import { useState } from "react"
import { UpdateContentComponent } from "../components/UpdateContentComponent";
import { BackLink } from "../components/BackLink";
import { UpdateLink } from "../components/UpdateLink";

export function UpdatePage({ selectedMessage, setSelectedMessage, updateMessage }) {

  const [newMessage, setNewMessage] = useState(selectedMessage.text)

  return (
    <>
      <h4>Update Message</h4>
      <UpdateContentComponent selectedMessage={ selectedMessage } newMessage={ newMessage } setNewMessage={ setNewMessage } />
      <UpdateLink selectedMessage={selectedMessage} newMessage={newMessage} updateMessage={updateMessage}/>
      &nbsp;
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
