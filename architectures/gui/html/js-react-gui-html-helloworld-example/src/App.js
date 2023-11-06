import { useState } from "react"
import { Image } from "./Image";
import { Name } from "./Name";
import { Message } from "./Message";
import { LinkCreate } from "./LinkCreate";
import { LinkBack } from "./LinkBack";

function App() {

  const [showMessage, setShowMessage] = useState(false)
  const [newName, setNewName] = useState("")
  const displayMessage = () => setShowMessage(true)
  const hideMessage = () => setShowMessage(false)
  const clearName = () => setNewName("")

  return (
    <>
      <Image />
      <Name newName={newName} setNewName={setNewName} />
      {showMessage ? <Message newName={newName} /> : null}
      {showMessage ? <LinkBack hideMessage={hideMessage} clearName={clearName} /> : <LinkCreate displayMessage={displayMessage}/>}
    </>
  );
}

export default App;
