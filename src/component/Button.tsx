

const Button = (props : {label : string ; onclick : () => void ; disable : boolean}) => {
  return (
    <div>
        <button
         onClick={props.onclick}
         disabled= {props.disable}
        >
          {props.label}  
        </button>
    </div>
  )
}

export default Button