import { FormEvent, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  // Add correct typing for useRef to be able to access value property
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Check if refs are not null before accessing their value
    const nameValue = name.current ? name.current.value : '';
    const emailValue = email.current ? email.current.value : '';
    const passwordValue = password.current ? password.current.value : '';

    setData({
      name: nameValue,
      email: emailValue,
      password: passwordValue
    });
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" ref={name} placeholder="Name" />
        <input type="email" ref={email} placeholder="Email" />
        <input type="password" ref={password} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.password}</h1>
      </div>
    </div>
  );
};

export default Form;
