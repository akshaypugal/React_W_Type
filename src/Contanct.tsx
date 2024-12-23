import { useState } from "react"

type Datatype = {
    name : string , 
    age : string , 
    email : string , 

}
const Contanct = () => {
    const[items , setItems] = useState<Datatype[]>([])
    const[data , setData] = useState<Datatype>({
        name : '',
        age : '', 
        email : ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const{name , value} = e.target;
        setData((prev) =>({
             ...prev , [name] : value
        }))
    }
    const handleSubmit = () =>{
          setItems((prev) =>[
              ...prev , {...data}
          ])
          setData({name : '' , age : '' , email: ''})
    }
    const handleDelete = (index : number) =>{
            setItems(items.filter((_, i) => i !== index)) 
    }
  return (
    <div>
         <label>
            Enter Name : 
            <input type="text" value={data.name} onChange={handleChange} name="name"/>
         </label>
         <label>
            Enter Age : 
            <input type="text" value={data.age} onChange={handleChange} name="age"/>
         </label>
         <label>
            Enter Email : 
            <input type="text" value={data.email} onChange={handleChange} name="email"/>
         </label>
         <button onClick={handleSubmit}>Submit</button>

         <div>
            {
                items.map((m , index) =>(
                    <ul key={index}>
                        <li>{m.name}</li>
                        <li>{m.age}</li>
                        <li>{m.email}</li>
                        <button onClick={() => handleDelete(index)}>X</button>
                    </ul>
                ))
            }
         </div>
    </div>
  )
}

export default Contanct
