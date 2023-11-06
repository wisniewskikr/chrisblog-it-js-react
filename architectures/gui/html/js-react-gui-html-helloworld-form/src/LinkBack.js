import { Link } from "react-router-dom";

export function LinkBack({ hideMessage, clearName }) {

  const onClick = () => {
    hideMessage()
    clearName()
  }

  return (
    <Link to="" onClick={onClick}>Back</Link>
  )

}
