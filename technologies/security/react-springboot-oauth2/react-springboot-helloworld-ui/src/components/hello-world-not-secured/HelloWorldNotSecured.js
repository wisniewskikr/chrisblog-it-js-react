import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HelloWorldNotSecured = () => {

  const [message, setMessage] = useState(0);
  let navigate = useNavigate();

  useEffect(() =>{

    const fetchData = async (url) => {

      try {

        let response = await fetch(url);
        let data = await response.json();

        if (!response.ok) {
            throw new Error(`Status: ${response.status}! Message: ${data.message}!`);
        }
        
        setMessage(data.message);

      } catch (error) {
          navigate('/error?message=' + error.message);
      }

    };

    fetchData("http://localhost:8080");

  }, [navigate]);

  return (
    <>
      <div>{message}</div>
      <div><Link to="/">Back</Link></div>
    </>
  );

}

export default HelloWorldNotSecured;