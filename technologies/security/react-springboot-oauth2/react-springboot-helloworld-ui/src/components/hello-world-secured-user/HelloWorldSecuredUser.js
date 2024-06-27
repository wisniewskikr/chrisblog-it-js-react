import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HelloWorldSecuredUser = () => {

  const [message, setMessage] = useState(0);

  useEffect(() =>{

    const fetchData = async (url) => {

      try {

        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        setMessage(data.message);

      } catch (error) {
          console.error('Error fetching data:', error);
      }

    };

    fetchData("http://localhost:8080/user");

  }, []);

  return (
    <>
      <div>{message}</div>
      <div><Link to="/">Back</Link></div>
    </>
  );

}

export default HelloWorldSecuredUser;