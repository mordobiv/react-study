import React from 'react';
import { useForm } from 'react-hook-form';
import ValidationError from '../validation-error/validation-error';
import NodeType from '../../types/node';
import { useDispatch } from 'react-redux';
import { add } from '../../store/forms';

export default function AddForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function OnSubmit(data: NodeType) {
    data.status = data.status ? 'alive' : 'dead';
    data.image = URL.createObjectURL(data.image[0] as unknown as Blob);
    dispatch(add(data));
    alert('Success, all data is saved!');
    reset();
  }

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="form-add">
      <div className="form__field">
        <label className="form__label">Name:</label>
        <input {...register('name', { required: true, minLength: 3 })} />
        {errors.name && (errors.name.type === 'required' || errors.name.type === 'minLength') && (
          <ValidationError message={'Specify a name'} />
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
        {errors.species && errors.species.type === 'required' && (
          <ValidationError message={'Select a specie'} />
        )}
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
        {errors.gender && errors.gender.type === 'required' && (
          <ValidationError message={'Specify gender'} />
        )}
      </div>
      <div className="form__field">
        <label className="form__label">Edition date: </label>
        <input {...register('created', { required: true })} type="date" />
        {errors.created && errors.created.type === 'required' && (
          <ValidationError message={'Select created date'} />
        )}
      </div>
      <div className="form__field">
        <label className="form__label">Select an image:</label>
        <input {...register('image', { required: true })} type="file" accept="image/*" />
        {errors.image && errors.image.type === 'required' && (
          <ValidationError message={'Upload image'} />
        )}
      </div>
      <input type="submit" />
    </form>
  );
}
