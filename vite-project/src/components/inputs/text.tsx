import React from 'react';
import inputType from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default function Text(props: inputType) {
  return (
    <div className="form__field">
      <label className="form__label">{props.label}:</label>
      <input type="text" ref={props.refValue} />
      {props.isError && <ValidationError message="Specify a name" />}
    </div>
  );
}
