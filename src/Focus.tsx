import { useRef } from "react"

const Focus = () => {
  const InputRef = useRef<HTMLInputElement>(null)
  const handleChange = () =>{
      InputRef.current?.focus()
  }
  return (
    <div>
      <input
       type="text"
       placeholder="Click me to focus"
       ref={InputRef}
       />
     <button onClick={handleChange}>Focus</button>
    </div>
  )
}

export default Focus
