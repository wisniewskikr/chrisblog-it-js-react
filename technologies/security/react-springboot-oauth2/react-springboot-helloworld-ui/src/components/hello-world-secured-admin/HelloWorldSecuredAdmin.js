import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HelloWorldSecuredAdmin = () => {

  const [message, setMessage] = useState(0);

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("http://localhost:8080/admin");
      const result = await response.json();
      setMessage(result.message);

    };

    fetchData();

  }, []);

  return (
    <>
      <div>{message}</div>
      <div><Link to="/">Back</Link></div>
    </>
  );

}

export default HelloWorldSecuredAdmin;