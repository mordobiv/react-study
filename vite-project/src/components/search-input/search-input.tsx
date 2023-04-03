import React, { useState, useEffect } from 'react';

export default function SearchInput() {
  const searchLocalStorageKey = 'searchValue';
  const [value, setValue] = useState(localStorage.getItem(searchLocalStorageKey) || '');

  useEffect(() => {
    return () => {
      localStorage.setItem(searchLocalStorageKey, value || '');
      console.log(2, value);
    };
  });

  return (
    <input
      placeholder="Search..."
      onChange={(e) => {
        setValue(e.target.value);
      }}
      defaultValue={value}
    />
  );
}
