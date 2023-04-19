import React from 'react';

export default function ValidationError(props: { message: string }) {
  return <div className="form_error">{props.message}</div>;
}
