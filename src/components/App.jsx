import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Searchbar from './Searchbar/';
import SearchResults from './SearchResults/SearchResults';
import ImageFinderAPI from '../ImageFinderAPI';
import status from '../Constants/status';
const { IDLE, RESOLVED, RESJECTED, PENDING } = status;

class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 0,
    images: [],
    status: IDLE,
  };
  // async componentDidMount() {
  //   try {
  //     const response = await ImageFinderAPI('cat', 1);
  //     this.setState(response);
  //   } catch {
  //     toast.error(`No result found for ${this.query}`);
  //   }
  // }
  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const { query, page } = this.state;
    if (query !== prevQuery) {
      const response = await ImageFinderAPI(query, page);
    }
  }
  handleFormSubmit = query => {
    if (query !== this.state.query) {
      this.setState(() => {
        return { query, page: 1, images: [] };
      });
    }
  };
  handleChangePage = () => {
    this.setState(prevState => {
      const { page } = prevState;
      const { totalPages } = this.state;
      if (page < totalPages) {
        return { page: page + 1 };
      }
    });
  };

  render() {
    const { images, status } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <SearchResults
          images={images}
          status={status}
          onClick={this.handleChangePage}
        />
        <Toaster />
      </>
    );
  }
}

export default App;
