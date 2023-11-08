import { Link } from "react-router-dom";

export function DeleteLink({ selectedMessage, deleteMessage }) {

    const onClick = () => {
        deleteMessage(selectedMessage.id)        
    }

    return (
        <Link to="/" onClick={onClick}>Delete</Link>   
    )
  
  }