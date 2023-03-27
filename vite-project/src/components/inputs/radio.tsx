import React from 'react';
import inputType from '../../types/input';

export default class Radio extends React.Component<inputType> {
  render() {
    return (
      <>
        <label>{this.props.label}: </label>
        <div ref={this.props.refValue}>
          <input type="radio" id="male" name="gender" value="male" />
          <input type="radio" id="female" name="gender" value="female" />
          {this.props.isError && <p>Error</p>}
        </div>
      </>
    );
  }
}
