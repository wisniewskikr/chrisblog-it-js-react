import { Link } from "react-router-dom";

export function UpdateLink({ selectedMessage, newMessage, updateMessage }) {

    const onClick = () => {
        updateMessage(selectedMessage.id, newMessage)       
    }

    return (
        <Link to="/" onClick={onClick}>Update</Link>   
    )
  
  }