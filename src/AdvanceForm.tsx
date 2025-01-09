import { SubmitHandler, useForm } from 'react-hook-form'
import './style.css'

type Formdata = {
    name : string , 
    email : string, 
    city : string , 
    country : string , 
    zipcode : number 
}
const AdvanceForm = () => {
   const{register , handleSubmit , formState:{errors}} = useForm<Formdata>()
   const onsubmit:SubmitHandler<Formdata> = (data) =>{
     console.log(data)
   }
  return (
     <form className='form-container' onSubmit={handleSubmit(onsubmit)}>
         <div>
            <label htmlFor='name'>Name:</label>
            <input
            type='text'
            {...register('name' ,{required : "Name is required"})}/>
            {errors.name && <p>{errors.name.message}</p>}
         </div>
         <div>
            <label htmlFor='email'>Email:</label>
            <input
            type='email'
            {...register('email' ,{required : "Email is required" , pattern:{value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/ , message:"Please enter Proper Email address"}})}/>
            {errors.email && <p>{errors.email.message}</p>}
         </div>
         <div>
            <label htmlFor='city'>City:</label>
            <input
            type='text'
            {...register('city' ,{required : "City name is required" })}/>
            {errors.city && <p>{errors.city.message}</p>}
         </div>
         <div>
            <label htmlFor='Country'>Country:</label>
            <input
            type='text'
            {...register('country' ,{required : "Country is required"})}/>
            {errors.country && <p>{errors.country.message}</p>}
         </div>
         <div>
            <label htmlFor='Zip-Code'>Zip-Code:</label>
            <input
            type='number'
            {...register('zipcode' ,{required : "Code is required"})}/>
            {errors.zipcode && <p>{errors.zipcode.message}</p>}
         </div>
         <button type='submit'>Submit</button>
     </form>
  )
}

export default AdvanceForm
