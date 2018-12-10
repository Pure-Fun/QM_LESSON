import React, { Component } from 'react';
import propTypes from 'prop-types';

class Search extends Component {
  static contextTypes = {
    router: propTypes.object.isRequired
  }

  searchRef = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;
    console.log(this.context.router);
    this.context.router.history.push(`/search/${searchTerm}`);
    console.log(this.searchRef, searchTerm);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Hobby, Malt, Angry, 南昌8度" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search;