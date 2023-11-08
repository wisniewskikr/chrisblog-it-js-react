export function ListItemComponent({ id, text, setSelectedMessageId }) {

    return (
        <>
            <div>                
                <input type='radio' name='messages' value={id} onClick={e => setSelectedMessageId(e.target.value)} />
                <label>{text}</label>
            </div>   
        </>
    )
  
  }