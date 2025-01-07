type student  = {
    name : string , 
    email : string , 
    class: string 
}

type tr = student & {
  
    subject : string 
}


export{type student , type tr}