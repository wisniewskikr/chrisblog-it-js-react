export function DeleteContentComponent( {selectedMessage} ) {

    return (
        <table>
            <tr>
                <td><label for="id">Message Id</label></td>
                <td><input type="text" value={ selectedMessage.id } disabled/></td>
            </tr>
            <tr>
                <td><label for="text">Message Text</label></td>
                <td><input type="text" value={ selectedMessage.text } disabled/></td>
            </tr>
        </table>
    )
  
  }