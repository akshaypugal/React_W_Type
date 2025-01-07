import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormType>();
  
  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
};

export default Form;
