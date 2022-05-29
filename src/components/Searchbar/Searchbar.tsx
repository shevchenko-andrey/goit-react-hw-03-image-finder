import React, { Component } from 'react';

import {
  HeaderSearchbar,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
interface Props {
  onSubmit: (query: string) => void;
}
interface State {
  query: string;
}
class Searchbar extends Component<Props, State> {
  state = {
    query: '',
  };
  handleChange = (e: React.BaseSyntheticEvent) => {
    const {
      target: { value },
    } = e;
    this.setState({ query: value.toLowerCase().trim() });
  };
  submitForm = (e: React.SyntheticEvent) => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(query);
  };
  render() {
    const { query } = this.state;

    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.submitForm}>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            onChange={this.handleChange}
            value={query}
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

export default Searchbar;
