function App() {

  const message = "<b>Hello World!</b>";

  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: message }}/>
    </div>
  );

}

export default App;