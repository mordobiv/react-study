import React, { useEffect } from 'react';
import apiUrl from '../../configuration';
import apiResponseType from '../../types/api-response';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../store/search';

export default function SearchInput(props: {
  handleSearchFilter: (data: apiResponseType) => void;
}) {
  const searchLocalStorageKey = 'searchValue';
  const dispatch = useDispatch();
  const value = useSelector((state) => state.searchReducer.value);

  useEffect(() => {
    return () => {
      localStorage.setItem(searchLocalStorageKey, value || '');
    };
  });

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Enter') {
      props.handleSearchFilter({ status: 'loading' });
      fetch(`${apiUrl}/character/?name=${value}`)
        .then((res) => {
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
    }
  }

  return (
    <input
      placeholder="Search..."
      onChange={(e) => {
        dispatch(setSearchValue(e.target.value));
      }}
      onKeyDown={handleKeyDown}
      defaultValue={value}
    />
  );
}
