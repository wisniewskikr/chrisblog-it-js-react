import { Link } from "react-router-dom";

export function DeleteLink({ selectedMessage, deleteMessage }) {

    const onClick = () => {
        if( window.confirm( "Are you sure you want to delete this message?" ) ){
            deleteMessage(selectedMessage.id)
        }                
    }

    return (
        <Link to="/" onClick={onClick}>Delete</Link>   
    )
  
  }