import  { FC } from 'react'
import { user1 } from './type'


type UserProps = {
    user : user1
}

const UserInform:FC<UserProps> = ({user}) => {
  return (
    <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserInform