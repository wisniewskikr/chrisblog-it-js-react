import { Link } from "react-router-dom";

export function NavigationComponent() {

  return (
    <>
      <div>
        <Link to="/create">Create</Link>
        <Link to="/view">View</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
      </div>
    </>
    
  )

}
