export function Name({ newName, setNewName }) {

  return (
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" value={newName} onChange={e => setNewName(e.target.value)}/>
    </div>
  )

}
