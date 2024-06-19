const Logger = (HelloWorld) => {  
  
  return function WithLogger(props) {
    console.log("Hello World from Logger");
    return <HelloWorld />;
  };

}

export default Logger;