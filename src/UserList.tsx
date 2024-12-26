import { useEffect, useState } from "react"


type DataType = {
  id : string , 
  name : string , 
  email : string , 
  phone : string 
}

const UserList = () => {
  const[data , setData] = useState<DataType[]>([])
  const[error , setError] = useState<null | string>('')
  const[loading , setLoading] = useState<boolean>(true)
  
  useEffect(() =>{
     const fetchData = async() =>{
          const response = await fetch("https://jsonplaceholder.typicode.com/users")
          if(!response.ok) return Error("Network issue")
          try {
            const data:DataType[] =await response.json() 
            setLoading(false);
            setData(data)
          } catch (error) {  
               setLoading(false)
               setError(error instanceof Error ? error.message : 'Error')
          }
          
     } 
     fetchData() ;
  },[])
  if(loading) return<h1>Loading.....</h1>
  if(error) return <h1>Something went wrong</h1>
  return (
     <div>
        <table>
           <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
           </thead>
           <tbody>
             {
              data.map((m) =>(
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.phone}</td>
                </tr>
              ))
             }
           </tbody>
        </table>
     </div>
  
)}

export default UserList
