export function UpdateContentComponent( {selectedMessage, newMessage, setNewMessage} ) {

    return (
        <table>
            <tr>
                <td><label for="id">Message Id</label></td>
                <td><input type="text" value={ selectedMessage.id } disabled/></td>
            </tr>
            <tr>
                <td><label for="text">Message Text</label></td>
                <td><input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)}/></td>
            </tr>
        </table>
    )
  
  }