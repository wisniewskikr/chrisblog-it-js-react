import { useState } from "react"
import { CreateContentComponent } from "../components/CreateContentComponent";
import { BackLink } from "../components/BackLink";
import { CreateLink } from "../components/CreateLink";

export function CreatePage({ addMessage, setSelectedMessage }) {

  const [newMessage, setNewMessage] = useState("")

  return (
    <>
      <h4>Create Message</h4>
      <CreateContentComponent newMessage={ newMessage } setNewMessage={ setNewMessage } />
      <CreateLink addMessage={ addMessage } newMessage={ newMessage } setSelectedMessage={setSelectedMessage} />
      &nbsp;
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
