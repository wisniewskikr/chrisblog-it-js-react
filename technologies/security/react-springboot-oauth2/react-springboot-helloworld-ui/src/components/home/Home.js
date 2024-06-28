import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { Link } from "react-router-dom";

const Home = () => {
  
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (

    <>
      
    { isAuthenticated ? <div><Link to="/logout" onClick={signOut}>Logout</Link></div> : <div><Link to="/login">Login</Link></div> }
      <nav>
        <ul>
            <li> <Link to="/not-secured">Hello World Not Secured</Link> </li>
            <li> <Link to="/secured-user">Hello World Secured for User</Link> </li>
            <li> <Link to="/secured-admin">Hello World Secured for Admin</Link> </li>
        </ul>
      </nav>
    </>


  );

}

export default Home;