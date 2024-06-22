import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <nav>
      <ul>
          <li> <Link to="/not-secured">Hello World Not Secured</Link> </li>
          <li> <Link to="/secured">Hello World Secured</Link> </li>
      </ul>
    </nav>
  );

}

export default Home;