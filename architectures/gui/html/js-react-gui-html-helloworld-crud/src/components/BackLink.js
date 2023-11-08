import { Link } from "react-router-dom";

export function BackLink({ setSelectedMessage }) {

    return (
        <Link to="/" onClick={() => setSelectedMessage(null)}>Back</Link>   
    )
  
  }