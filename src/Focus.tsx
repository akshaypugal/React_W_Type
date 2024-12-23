import { useRef } from "react"


const Focus = () => {
    const inputRef =  useRef<HTMLInputElement>(null)
    const handleClick = () =>{
        inputRef.current?.focus()
    }
  return (
    <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Click button to focus"/>
          <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default Focus
