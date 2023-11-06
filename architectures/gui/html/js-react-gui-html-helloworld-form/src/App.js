import { useState } from "react"
import { Link } from "react-router-dom";
import helloWorld from './images/helloworld.jpg'
import { Message } from "./Message";

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
      <Link to="" onClick={displayMessage}>Create</Link>
    </>
  );
}

export default App;
