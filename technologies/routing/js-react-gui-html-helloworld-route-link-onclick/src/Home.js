import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    
    const [url, setUrl] = useState("https://www.google.com");

    const handleOnClick = () => {
        setUrl("/helloworld");
    }

    return (
        <Link to={url} onClick={handleOnClick}>Hello World</Link>
    )

};

export default Home;