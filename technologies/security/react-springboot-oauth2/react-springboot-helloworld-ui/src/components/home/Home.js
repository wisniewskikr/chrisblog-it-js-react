import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <nav>
      <ul>
          <li> <Link to="/not-secured">Hello World Not Secured</Link> </li>
          <li> <Link to="/secured-user">Hello World Secured for User</Link> </li>
          <li> <Link to="/secured-admin">Hello World Secured for Admin</Link> </li>
      </ul>
    </nav>
  );

}

export default Home;