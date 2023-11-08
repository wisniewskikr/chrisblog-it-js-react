import { Link } from "react-router-dom";

export function NavigationComponent({ selectedMessage }) {

  return (
    <>
      {selectedMessage == null ? (

        <div id="menu-texts">
          <a href="/create">Create</a>&nbsp;
          <span>View</span>&nbsp;        
          <span>Update</span>&nbsp;
          <span>Delete</span>&nbsp;
        </div>

      ): (

        <div>
          <Link to="/create">Create</Link>&nbsp;
          <Link to="/view">View</Link>&nbsp;
          <Link to="/update">Update</Link>&nbsp;
          <Link to="/delete">Delete</Link>&nbsp;
        </div>

      )}
    </>
    
  )

}
