import { useState } from "react"

interface Usertype{
  name : string, 
  age : Number , 
  email : string
}
const Profile = () => {
  const[user , setUser] = useState<Usertype>({
    name : '',
    age : 0,
    email: ''
  })

  const handleChange1 = (name : string) =>{
        setUser((prev) =>({
          ...prev , name
        }))
  }
 const handleChange2 = (age : string) =>{
    setUser((prev) =>({
      ...prev , age : +age
    }))
}
const handleChange3 = (email : string) =>{
  setUser((prev) =>({
    ...prev , email
  }))
}
  return (
    <div>
        <h1>User Infor</h1>
        <label>
          Enter Your Name : 
          <input type="text" value={user.name} onChange={e => handleChange1(e.target.value)} />
        </label>
        <label>
          Enter Your Age : 
          <input type="text" value={user.age > 0 ? user.age : ''} onChange={e => handleChange2(e.target.value)} />
        </label> <label>
          Enter Your Email : 
          <input type="text" value={user.email} onChange={e => handleChange3(e.target.value)} />
        </label>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
    </div>
  )
}

export default Profile
