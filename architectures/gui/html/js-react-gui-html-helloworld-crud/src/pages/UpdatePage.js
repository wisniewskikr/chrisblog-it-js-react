import { BackLink } from "../components/BackLink";

export function UpdatePage({ setSelectedMessage }) {

  return (
    <>
      <h4>Update Message</h4>
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
