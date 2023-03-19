import React from 'react';

export default class SearchInput extends React.Component {
  render() {
    const searchLocalStorageKey = 'searchValue';
    return (
      <input
        placeholder="Search..."
        onChange={(e) => {
          localStorage.setItem(searchLocalStorageKey, e.target.value || '');
        }}
        defaultValue={localStorage.getItem(searchLocalStorageKey) || ''}
      />
    );
  }
}
