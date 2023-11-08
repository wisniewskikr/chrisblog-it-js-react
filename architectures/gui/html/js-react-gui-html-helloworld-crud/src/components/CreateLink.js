import { Link } from "react-router-dom";

export function CreateLink({ addMessage, newMessage }) {

    const onClick = () => {
        addMessage(newMessage)
    }

    return (
        <Link to="" onClick={onClick}>Create</Link>   
    )
  
  }