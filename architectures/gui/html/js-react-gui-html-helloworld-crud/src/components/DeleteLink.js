import { Link } from "react-router-dom";

export function DeleteLink({ selectedMessage, deleteMessage, setSelectedMessage }) {

    const onClick = () => {
        if( window.confirm( "Are you sure you want to delete this message?" ) ){
            deleteMessage(selectedMessage.id)
            setSelectedMessage(null)
        }                
    }

    return (
        <Link to="/" onClick={onClick}>Delete</Link>   
    )
  
  }