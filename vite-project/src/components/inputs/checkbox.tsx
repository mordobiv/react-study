import React from 'react';
import inputType from '../../types/input';

export default class Checkbox extends React.Component<inputType> {
  render() {
    return (
      <div className="form__field">
        <label className="form__label">{this.props.label}: </label>
        <input type="checkbox" ref={this.props.refValue} />
      </div>
    );
  }
}
