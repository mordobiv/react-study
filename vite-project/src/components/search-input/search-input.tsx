import React from 'react';

type SearchState = {
  value: string;
};

export default class SearchInput extends React.Component<object, SearchState> {
  searchLocalStorageKey = 'searchValue';

  constructor(props: SearchState | Readonly<SearchState>) {
    super(props);
    this.state = { value: localStorage.getItem(this.searchLocalStorageKey) || '' };
  }

  componentWillUnmount(): void {
    localStorage.setItem(this.searchLocalStorageKey, this.state.value || '');
  }

  updateSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <input
        placeholder="Search..."
        onChange={(e) => this.updateSearchValue(e)}
        defaultValue={this.state.value}
      />
    );
  }
}
