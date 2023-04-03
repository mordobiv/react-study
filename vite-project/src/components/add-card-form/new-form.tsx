import React from 'react';
import { useForm } from 'react-hook-form';
import ValidationError from '../validation-error/validation-error';
import Text from '../inputs/text';

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// export default function NewForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("Name", { required: true })} />
//       {errors.name && errors.name.type === "required" && <span>This is required</span>}
//       <input type="submit" />
//     </form>
//   );
// }

export default function App(formSubmit: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.id = 1;
    data.status = data.status ? 'alive' : 'dead';
    data.image = URL.createObjectURL(data.image[0]);
    console.log(data);
    formSubmit.onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-add">
      <div className="form__field">
        <label className="form__label">Name:</label>
        <input {...register('name', { required: true, minLength: 3 })} />
        {errors.name && (errors.name.type === 'required' || errors.name.type === 'minLength') && (
          <ValidationError message={'wtf'} />
        )}
      </div>
      <div className="form__field">
        <label className="form__label">Is Alive? </label>
        <input type="checkbox" {...register('status')} />
      </div>
      <div className="form__field">
        <label className="form__label">Specie: </label>
        <select defaultValue={''} {...register('species', { required: true })}>
          <option value="" hidden>
            Choose here
          </option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </select>
        {errors.species && errors.species.type === 'required' && <ValidationError message={'wtf'} />}
      </div>
      <div className="form__field">
        <label className="form__label">Gender: </label>
        <span>
          <span>Male</span>
          <input
            {...register('gender', { required: true })}
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <span>Female</span>
          <input
            {...register('gender', { required: true })}
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
        </span>
        {errors.gender && errors.gender.type === 'required' && <ValidationError message={'wtf'} />}
      </div>
      <div className="form__field">
        <label className="form__label">Edition date: </label>
        <input {...register('created', { required: true })} type="date" />
        {errors.created && errors.created.type === 'required' && <ValidationError message={'wtf'} />}
      </div>
      <div className="form__field">
        <label className="form__label">Select an image:</label>
        <input {...register('image', { required: true })} type="file" accept="image/*" />
        {errors.image && errors.image.type === 'required' && <ValidationError message={'wtf'} />}
      </div>
      <input type="submit" />
    </form>
  );
}
