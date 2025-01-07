import { FC } from "react"
import { tr } from "./type1"

type trprops = {
    tr : tr
}
const Tr:FC<trprops>= ({tr}) => {
  return (
    <div>
        <p>{tr.name}</p>
        <p>{tr.email}</p>
        <p>{tr.class}</p>
        <p>{tr.subject}</p>
        <p>{tr.name}</p>
    </div>
  )
}

export default Tr