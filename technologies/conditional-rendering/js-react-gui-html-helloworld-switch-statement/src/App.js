function App() {

  const value = 2;
  switch(value) {
    case 1:
      return (<div>One</div>);
    case 2:
      return (<div>Hello World!</div>);
    default:
      return (<div>Default</div>);
  }
  
}

export default App;