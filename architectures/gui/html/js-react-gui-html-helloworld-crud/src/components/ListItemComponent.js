export function ListItemComponent({ id, text }) {

    return (
        <>
            <div>                
                <input type='radio' name='messages' value={id} />
                <label>{text}</label>
            </div>   
        </>
    )
  
  }