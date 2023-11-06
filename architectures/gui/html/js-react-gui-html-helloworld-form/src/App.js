import { Link } from "react-router-dom";
import helloWorld from './images/helloworld.jpg'
import "./css/helloworld.css"

function App() {
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
      <span id="message-text">Hello World</span>
      <Link to="">Create</Link>
    </>
  );
}

export default App;
