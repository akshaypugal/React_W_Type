import { FC } from 'react'
import { admin } from './type'

type Admin = {
    admin1 : admin
}

const AdminInfo:FC<Admin> = ({admin1}) => {
  return (
    <div>
      <p>{admin1.id}</p>
      <p>{admin1.name}</p>
      <p>{admin1.email}</p>
       <p>{admin1.role}</p>
       <p>{admin1.lastLogin.toString()}</p>
    </div>
  )
}

export default AdminInfo
