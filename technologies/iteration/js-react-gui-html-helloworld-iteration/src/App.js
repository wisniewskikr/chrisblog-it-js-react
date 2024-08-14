function App() {

  const messages = [
    {text: 'Hello World 1!'},
    {text: 'Hello World 2!'},
    {text: 'Hello World 3!'}
  ];

  const list = getList();

  function getList() {

    let list = [];

    for (let message of messages) {
      list.push(<li key={message.text}> {message.text} </li>)
    }

    return list;

  }

  return (
    <ul>
      {list}
    </ul>
  );
}

export default App;
