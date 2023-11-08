import { BackLink } from "../components/BackLink";
import { DeleteContentComponent } from "../components/DeleteContentComponent";
import { DeleteLink } from "../components/DeleteLink";

export function DeletePage({ selectedMessage, setSelectedMessage, deleteMessage }) {

  return (
    <>
      <h4>Delete Message</h4>
      <DeleteContentComponent selectedMessage={ selectedMessage }/>
      <DeleteLink selectedMessage={ selectedMessage } deleteMessage={ deleteMessage }/>
      &nbsp;
      <BackLink setSelectedMessage={ setSelectedMessage } />
    </>    
  )

}
