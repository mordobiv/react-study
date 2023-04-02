import React from 'react';
import { selectType } from '../../types/input';
import ValidationError from '../validation-error/validation-error';

export default function Select(props: selectType) {
  return (
    <div className="form__field">
      <label className="form__label">{props.label}: </label>
      <select defaultValue={''} ref={props.refValue}>
        <option value="" hidden>
          Choose here
        </option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="robot">Robot</option>
      </select>
      {props.isError && <ValidationError message="Select a specie" />}
    </div>
  );
}
