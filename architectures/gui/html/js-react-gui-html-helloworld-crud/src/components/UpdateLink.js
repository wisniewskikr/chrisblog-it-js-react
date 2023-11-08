import { Link } from "react-router-dom";

export function UpdateLink({ selectedMessage, newMessage, updateMessage, setSelectedMessage }) {

    const onClick = () => {
        updateMessage(selectedMessage.id, newMessage)       
        setSelectedMessage(null)
    }

    return (
        <Link to="/" onClick={onClick}>Update</Link>   
    )
  
  }