import React from 'react';
import inputType from '../../types/input';

export default function Checkbox(props: inputType) {
  return (
    <div className="form__field">
      <label className="form__label">{props.label}: </label>
      <input type="checkbox" ref={props.refValue} />
    </div>
  );
}
