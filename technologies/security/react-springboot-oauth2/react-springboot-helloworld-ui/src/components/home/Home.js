import { Link } from "react-router-dom";
import AuthInfo from "../auth-info/AuthInfo";

const Home = () => {
  
  

  return (

    <>      
      
      <AuthInfo/>
      <nav>
        <ul>
            <li> <Link to="/public">Public</Link> </li>
            <li> <Link to="/user">User</Link> </li>
            <li> <Link to="/secured-admin">Hello World Secured for Admin</Link> </li>
        </ul>
      </nav>
      
    </>


  );

}

export default Home;