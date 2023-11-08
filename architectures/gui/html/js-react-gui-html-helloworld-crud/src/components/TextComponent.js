export function TextComponent( {newMessage, setNewMessage} ) {

    return (
        <table>            
            <tr>
                <td><label for="text">Message Text</label></td>
                <td><input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)}/></td>
            </tr>
        </table>
    )
  
  }