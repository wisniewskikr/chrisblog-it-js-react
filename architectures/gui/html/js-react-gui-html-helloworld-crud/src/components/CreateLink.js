import { Link } from "react-router-dom";

export function CreateLink({ addMessage, newMessage, setSelectedMessage }) {

    const onClick = () => {
        addMessage(newMessage)
        setSelectedMessage(null)        
    }

    return (
        <Link to="/" onClick={onClick}>Create</Link>   
    )
  
  }