import { useState, useEffect } from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { Link, useNavigate } from "react-router-dom";

const HelloWorldSecuredAdmin = () => {

  const [message, setMessage] = useState(0);
  const authHeader = useAuthHeader();
  let navigate = useNavigate();

  useEffect(() =>{

    const fetchData = async (url) => {

      try {

        let response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader,
          },
        });

        let data = await response.json();

        if (!response.ok) {
            throw new Error(`Status: ${response.status}! Message: ${data.message}!`);
        }
        
        setMessage(data.message);

      } catch (error) {
          navigate('/error?message=' + error.message);
      }

    };

    fetchData("http://localhost:8080/admin");

  }, [navigate, authHeader]);

  return (
    <>
      <div>{message}</div>
      <div><Link to="/">Back</Link></div>
    </>
  );

}

export default HelloWorldSecuredAdmin;