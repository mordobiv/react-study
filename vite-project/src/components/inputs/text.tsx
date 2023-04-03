import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';
import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form';

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// export default function Text(props: inputType) {
export default function Text({ label, register, required }: InputProps) {
  return (
    <div className="form__field">
      <label className="form__label">{label}:</label>
      <input type="text" {...register(label, { required })} />
      {/* {props.isError && <ValidationError message="Specify a name" />} */}
    </div>
  );
}
