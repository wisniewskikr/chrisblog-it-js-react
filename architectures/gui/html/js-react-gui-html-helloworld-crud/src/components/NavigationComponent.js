import { Link } from "react-router-dom";

export function NavigationComponent() {

  return (
    <>
      <div>
        <Link to="/create">Create</Link>&nbsp;
        <Link to="/view">View</Link>&nbsp;
        <Link to="/update">Update</Link>&nbsp;
        <Link to="/delete">Delete</Link>&nbsp;
      </div>
    </>
    
  )

}
