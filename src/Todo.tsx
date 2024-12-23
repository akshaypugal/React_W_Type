    import { useState } from "react"


    const Todo = () => {
        const [items , setItems] = useState<string[]>([])
        const [change , setChange] = useState<string>('')
        const handleClick = () => {
            if(change.trim()){
                setItems((prev) => [
                    ...prev, // Spread the previous items
                    change,  // Add the new change value
                    ]);
                    setChange('');
            }
          
        };
        
    return (
        <div>
        <label>
            Enter items:
            <input type="text" value={change} onChange={(e) => setChange(e.target.value)}/>
        </label>
        <button onClick={handleClick}>Submit</button>
        <div>
            {
                items.map((m ,index) =>(
                    <ul key={index}>
                        <li>{m}</li>
                    </ul>
                ))
            }
        </div>
        </div>
    )
    }

    export default Todo
