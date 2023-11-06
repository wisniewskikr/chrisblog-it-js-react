import { useState } from "react"
import helloWorld from './images/helloworld.jpg'
import { Message } from "./Message";
import { LinkCreate } from "./LinkCreate";
import { LinkBack } from "./LinkBack";

function App() {

  const [showMessage, setShowMessage] = useState(false)
  const displayMessage = () => setShowMessage(true)
  const hideMessage = () => setShowMessage(false)

  return (
    <>
      <div>
        <img src={helloWorld} alt="Hello World"/>
      </div>
      <form>
          <div>
              <label for="name">Name:</label>
              <input type="text" name="name"/>
          </div>
      </form>
      {showMessage ? <Message /> : null}
      {showMessage ? <LinkBack hideMessage={hideMessage} /> : <LinkCreate displayMessage={displayMessage}/>}
    </>
  );
}

export default App;
