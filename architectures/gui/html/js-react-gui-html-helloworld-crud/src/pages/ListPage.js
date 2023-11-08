import { ListItemComponent } from "../components/ListItemComponent";
import { NavigationComponent } from "../components/NavigationComponent";

export function ListPage({ selectedMessage, messages, setSelectedMessageId }) {  

  return (
    <>
      <h4>List Messages</h4>
      <NavigationComponent selectedMessage={selectedMessage} />

      {messages.length === 0 && "There is no messages yet"}

      {messages.map(message => {
        return (
          <ListItemComponent            
            key={message.id}
            id={message.id}
            text={message.text}
            setSelectedMessageId={setSelectedMessageId}
          />
        )
      })}

    </>    
  )

}
