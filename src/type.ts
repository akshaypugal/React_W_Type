type user1 = {
    id : number , 
    name : string , 
    email : string 
}

type admin = user1& {
    role : string 
    lastLogin : Date
}


export{type user1 , type admin }