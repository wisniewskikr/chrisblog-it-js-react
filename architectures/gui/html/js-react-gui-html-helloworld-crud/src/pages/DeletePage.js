import { BackLink } from "../components/BackLink";

export function DeletePage({ setSelectedMessage }) {

  return (
    <>
      <h4>Delete Message</h4>
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
