import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HelloWorldNotSecured = () => {

  const [message, setMessage] = useState(0);

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("http://localhost:8080");
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

export default HelloWorldNotSecured;