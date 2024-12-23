import { useState } from "react"

const Contanct = () => {
    const [data , setData] = useState({
        name : '',
        email : ''
    })
    const{name , value} = e.target
  return (
    <div>
        <form>
            <label>
                Name:
                <input
                 name="name"
                  type="text"
                  value={data.name}/>
            </label>
            <label>
                Email:
                <input
                name="email"
                type="text"
                value={data.email}/>
            </label>
        </form>
        <div>
            <h1>NAme : {data.name}</h1>
            <h1>Email:{data.email}</h1>
        </div>
    </div>
  )
}

export default Contanct
