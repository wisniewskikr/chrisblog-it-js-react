import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();
  const signIn = useSignIn();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData("http://localhost:8080/authenticate");
  };

  const fetchData = async (url) => {

    try {

      let response = await fetch(url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
      let data = await response.json();

      if (!response.ok) {
          throw new Error(`Status: ${response.status}! Message: ${data.message}!`);
      }

      signIn({
        auth: {
          token: data.token,
          type: 'Bearer'
        }
      });     

    } catch (error) {
        navigate('/error?message=' + error.message);
    }

  };   

  return (
    <>
      <form onSubmit={handleSubmit}>        
        <div>
          <input
            type="text"
            name="userName"            
            placeholder="Username..."
            value={formData.userName} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <input
            type="password" 
            name="password"           
            placeholder="Password..."
            value={formData.password} 
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div><Link to="/">Back</Link></div>
    </>
   
  );

}

export default Login;