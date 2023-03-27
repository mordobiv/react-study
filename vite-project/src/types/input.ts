import React from 'react';

type inputType = {
  label: string;
  refValue: React.RefObject<HTMLInputElement>;
  isError?: boolean;
};

export default inputType;
