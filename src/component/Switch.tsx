import { ReactNode, useState } from "react"
import Form from "./Form"
import UserProfile from "./UserProfile"

const Switch = () => {
    const[compo , setCompo] = useState<'a'|'b'|'c'>('a')

    const handletoggle = (componet:'a'|'b'|'c') =>{
        setCompo(componet)
    }
  return (
    <div>
        <button onClick={() => handletoggle('b')}>Click for form</button>
        <button onClick={() => handletoggle('c')}>Click for user</button>
        {
            compo === 'b' && <Form/>
    
        }
          {
            compo === 'c' && <UserProfile/>
          }
    </div>
  )
}

export default Switch
