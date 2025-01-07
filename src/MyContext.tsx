import { createContext, FC, ReactNode,  useState } from "react";


interface DataType {
    count: number ; 
    increment : () => void ;
    decrement : () => void;
    reset : () => void

}
interface MyType {
   children : ReactNode
}
export const Data = createContext<DataType>({
     count : 0, 
     increment : () => {},
     decrement : () => {} , 
     reset :() => {}
})

const Myprovider:FC<MyType>= ({children}) =>{
    const [count , setCount] = useState<number>(0);
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () =>{
        setCount(0)
    }
  return(
     <div>
        <Data.Provider value={{count , increment , decrement , reset}}>
            {children}
        </Data.Provider>
     </div>
  )
}
export default Myprovider ;