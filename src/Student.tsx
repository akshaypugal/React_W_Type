import { FC } from "react"
import { student } from "./type1"

type stu = {
    student : student
}


const Student:FC<stu> = ({student}) => {
  return (
    <div>
        <p>{student.name}</p>
        <p>{student.email}</p>
        <p>{student.class}</p>

    </div>
  )
}

export default Student