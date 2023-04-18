import React from 'react';
import apiUrl from '../../configuration';
import apiResponseType from '../../types/api-response';
import { setSearchValue } from '../../store/search';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function SearchInput(props: {
  handleSearchFilter: (data: apiResponseType) => void;
}) {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.searchReducer.value);

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
