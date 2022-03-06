import React from "react";
import { useForm } from "react-hook-form";

export default function Profile() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    const date=new Date().getTime().toString();
    console.log(date);
    console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName", { required:"this field id required",minLength:{value:4,message:"min length is 4"} ,maxLength:{value:10,message:"max length is excid"} })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <input {...register("lastName", { pattern:{value: /^[A-Za-z]+$/i ,message: "Last Name must be follow this pattern [A-Za-z] "}})} />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <input type="number" {...register("age", {required: "this field is required",min:{value: 18 ,message: "Age must be upper than 18"}, max: 99 })} />
      {errors.age && <p>{errors.age.message}</p>}


      <input type="checkbox" {...register("checkbox",{required:'checkbox can not be blank'})} />check me
      {errors.checkbox && <p>{errors.checkbox.message}</p>}
      <input type="submit" />
    </form>
  );
}

