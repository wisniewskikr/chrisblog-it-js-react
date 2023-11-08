import { useState } from "react"
import { TextComponent as CreateContentComponent } from "../components/CreateContentComponent";
import { BackLink } from "../components/BackLink";
import { CreateLink } from "../components/CreateLink";

export function CreatePage({ addMessage }) {

  const [newMessage, setNewMessage] = useState("")

  return (
    <>
      <h4>Create Message</h4>
      <CreateContentComponent newMessage={ newMessage } setNewMessage={ setNewMessage } />
      <CreateLink addMessage={ addMessage } newMessage={ newMessage } />
      &nbsp;
      <BackLink />
    </>    
  )

}
