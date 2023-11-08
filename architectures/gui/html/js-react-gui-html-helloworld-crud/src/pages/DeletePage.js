import { BackLink } from "../components/BackLink";
import { DeleteContentComponent } from "../components/DeleteContentComponent";

export function DeletePage({ selectedMessage, setSelectedMessage }) {

  return (
    <>
      <h4>Delete Message</h4>
      <DeleteContentComponent selectedMessage={ selectedMessage }/>
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
