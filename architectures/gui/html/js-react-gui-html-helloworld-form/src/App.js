function App() {
  return (
    <>
      <div>
        <img src="/images/helloworld.jpg" alt="Hello World"/>
      </div>
      <form>
          <div>
              <label for="name">Name:</label>
              <input type="text" name="name"/>
          </div>
      </form>
      <span id="message-text">Hello World</span>
    </>
  );
}

export default App;
