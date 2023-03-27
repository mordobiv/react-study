import React from 'react';

type inputType = {
  label: string;
  refValue: React.RefObject<HTMLInputElement>;
  isError?: boolean;
};

export type selectType = {
  label: string;
  refValue: React.RefObject<HTMLSelectElement>;
  isError?: boolean;
};

export default inputType;
