import { useReducer, useState } from "react"

type stateType ={
   count  : number
}
type actionType ={type : 'increment'} | {type : 'decrement'} | {type : 'reset'} | {type : 'incrementByAmount' ; num : number } | {type : 'decrementByAmount' ; num : number}


const UseReducer : React.FC = () => {
  
    const reducer = (state : stateType , action : actionType) =>{
         switch (action.type) {
            case 'increment':
             return{count : state.count + 1}
            case 'decrement':
                return{count : state.count - 1 }
            case 'reset':
                return{count : state.count = 0}
            case 'incrementByAmount' : 
              return{count : state.count + action.m}
            case 'decrementByAmount' : 
               return{count : state.count - action.m}
            default:
                return state ;
                break;
         }
    }
    const[state , dispatch] = useReducer(reducer , {count : 0})
    const[svalue , setSvalue] = useState<string>('');
    const handleIncr = () =>{
        const num = Number(m)
        dispatch({type : 'incrementByAmount' , num})
    }
    const handleDecr = () =>{
        dispatch({type : 'decrementByAmount' , num })
    }
  return (
    <div>
       <h1>Count : {state.count}</h1>
       <button onClick={() => {dispatch({type : 'increment'})}}>+</button>
       <button onClick={() => {dispatch({type : 'decrement'})}}>-</button>
       <button onClick={() => {dispatch({type : 'reset'})}}>reset</button>
       <input
        type="text"
        value={svalue}
        onChange={(e) => setSvalue(e.target.value)}
        />
        <button onClick={handleIncr}>incrByAmount</button>
        <button onClick={handleDecr}>decrByAmount</button>
    </div>
  )
}

export default UseReducer
