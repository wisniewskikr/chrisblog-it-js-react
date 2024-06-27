import { Link, useLocation } from "react-router-dom";

const ErrorMessage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get('message');

  return (
    <>
      <div>{message}</div>
      <div><Link to="/">Back</Link></div>
    </>
  );

}

export default ErrorMessage;