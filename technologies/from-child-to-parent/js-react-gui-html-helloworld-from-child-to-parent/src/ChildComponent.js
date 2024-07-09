const ChildComponent = ({ fromChild }) => {
    
    const dataToParent = () => {
      fromChild(document.getElementById("name").value);
      document.getElementById("name").value = "";
    };
  
    return (
        <>
            <div>
                <input type="text" id="name" placeholder="Name..." />
            </div>
            <div>
                <button onClick={dataToParent}>Send</button>
            </div>
        </>
    );
  };
  export default ChildComponent;