import { useState } from "react"

interface DataForm  {
  name : string , 
  age  : string,
  email : string
}

const UserProfile = () => {
  const [data , setData] = useState<DataForm>({
    name : '',
    age : '',
    email : ''

  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const{name , value}  = e.target
    setData((prev) =>({
        ...prev , [name]:value,
    }))
  }
  return (
    <div>
        <h1>User Info</h1>
        <label>
          Name:
          <input type="text" name="name" value={data.name} onChange={handleChange}/>
        </label>
        <label>
          Age : 
          <input type="text" name="age" value={data.age} onChange={handleChange}/>
        </label>
        <label>
            Email:
        <input type="text" name="email" value={data.email} onChange={handleChange}/>
        </label>
        <div>
          <h1>UserInfo</h1>
           <p>Name : {data.name}</p>
           <p>Age : {data.age}</p>
           <p>Email : {data.email}</p>
        </div>
    </div>
  )
}

export default UserProfile
