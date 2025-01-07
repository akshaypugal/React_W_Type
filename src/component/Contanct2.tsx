import { useRef, useState } from "react"


type Data = {
    name : string , 
    age : string , 
    email : string
}

const Contanct2 = () => {
    const[data , setData] = useState<Data>({
        name : '',
        age : '',
        email : ''
    })
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
         e.preventDefault();
        const nameValue = nameRef.current?nameRef.current.value : '';
        const ageValue = ageRef.current?ageRef.current.value : '';
        const emailValue = emailRef.current?emailRef.current.value : ''

        setData({
            name : nameValue,
            age : ageValue , 
            email : emailValue
        })

    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
          <label>
             Enter your name : 
             <input type="text" ref={nameRef}  placeholder="Enter your name "/>
          </label><br/>
          <label>
             Enter your age : 
             <input type="text" ref={ageRef}  placeholder="Enter your age"/>
          </label><br/>
          <label>
             Enter your email : 
             <input type="text" ref={emailRef}  placeholder="Enter your email"/>
          </label><br/>
          <button type="submit">SUbmit</button>
       </form>
       <div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.email}</h1>
       </div>
    </div>
  )
}

export default Contanct2
