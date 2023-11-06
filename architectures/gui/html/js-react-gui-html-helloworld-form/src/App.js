import { useState } from "react"
import helloWorld from './images/helloworld.jpg'
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
      <div>
        <img src={helloWorld} alt="Hello World"/>
      </div>
      <form>
          <div>
              <label for="name">Name:</label>
              <input type="text" name="name" value={newName} onChange={e => setNewName(e.target.value)}/>
          </div>
      </form>
      {showMessage ? <Message newName={newName} /> : null}
      {showMessage ? <LinkBack hideMessage={hideMessage} clearName={clearName} /> : <LinkCreate displayMessage={displayMessage}/>}
    </>
  );
}

export default App;
