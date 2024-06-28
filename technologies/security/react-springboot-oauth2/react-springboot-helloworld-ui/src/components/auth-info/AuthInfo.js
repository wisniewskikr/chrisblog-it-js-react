import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { Link } from "react-router-dom";

const AuthInfo = () => {

    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();
    const auth = useAuthUser()

    return (
        <>
            { 
                isAuthenticated 
                ? 
                <div>
                    <div>User: {auth.user}</div>
                    <div><Link to="/logout" onClick={signOut}>Logout</Link></div> 
                </div>
                : 
                <div><Link to="/login">Login</Link></div> 
            }
        </>
    );

}

export default AuthInfo;