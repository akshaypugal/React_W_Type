import { SubmitHandler, useForm } from "react-hook-form"
type formType = {
  name : string , 
  password : string , 
  email : string 
}

const Form = () => {
  const {register , handleSubmit , formState:{errors , isSubmitting}}  = useForm<formType>()
  const onsubmit:SubmitHandler<formType> = (data) =>{
     console.log(data)
  }
  return (
    <div>
       <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="name">Name : </label>
          <input
           type="text"
            {...register('name', {required : 'Name is required '})}
            />
            {errors && <span style={{color : "red"}}>{errors.name?.message}</span>}
            <br/>
          <label htmlFor="email">Email : </label>
          <input type="email" {...register('email' , {required : true , pattern : {value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message : 'Follow the pattern'}})}/>
           <br/>
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password',  {required : "alteat 8 character required"  , minLength:8})} />
          {errors.email && <span style={{color : 'red'}}>{errors.email.message}</span>}
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "loading" : 'submit'}</button>
       </form>
    </div>
  )
}

export default Form
