import React, { useState, useEffect } from 'react';
import apiUrl from '../../configuration';
import apiResponseType from '../../types/api-response';

export default function SearchInput(props: {
  handleSearchFilter: (data: apiResponseType) => void;
}) {
  const searchLocalStorageKey = 'searchValue';
  const [value, setValue] = useState(localStorage.getItem(searchLocalStorageKey) || '');

  useEffect(() => {
    return () => {
      localStorage.setItem(searchLocalStorageKey, value || '');
    };
  });

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Enter') {
      props.handleSearchFilter({ status: 'loading' });
      // setTimeout(() => {
      fetch(`${apiUrl}/character/?name=${value}`)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error('No corresponding characters found.');
          }
          return res.json();
        })
        .then((data) => {
          props.handleSearchFilter({ status: 'ok', nodes: data.results });
        })
        .catch((err) => {
          props.handleSearchFilter({
            status: 'fail',
            errorMessage: err.message,
          });
        });
      // }, 999999999);
    }
  }

  return (
    <input
      placeholder="Search..."
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={handleKeyDown}
      defaultValue={value}
    />
  );
}
