import React from 'react';

export default class ValidationError extends React.Component<{ message: string }> {
  render() {
    return <div className="form_error">{this.props.message}</div>;
  }
}
