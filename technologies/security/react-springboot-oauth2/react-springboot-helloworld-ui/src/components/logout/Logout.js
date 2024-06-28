import { Link } from "react-router-dom";

const Logout = () => {

    return (
        <>
            <div>You were logged out!</div>
            <div><Link to="/">Back</Link></div>
        </>
    );

}

export default Logout;