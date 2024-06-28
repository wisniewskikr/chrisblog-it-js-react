import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { Link } from "react-router-dom";

const AuthInfo = () => {

    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();

    return (
        <>
            { 
                isAuthenticated 
                ? 
                <div><Link to="/logout" onClick={signOut}>Logout</Link></div> 
                : 
                <div><Link to="/login">Login</Link></div> 
            }
        </>
    );

}

export default AuthInfo;