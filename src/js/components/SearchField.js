import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchTermChanged, search } from '../actions';

class SearchField extends Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  onSearchTermChange(evt) {
    this.props.searchTermChanged(evt.currentTarget.value);
  }

  search(evt) {
    evt.preventDefault();
    //TODO validation
    this.props.search(this.props.searchTerm);
  }

  render() {
    return (
      <div className="search-field-wrapper">
        <form onSubmit={this.search}>
          <input type="text" onChange={this.onSearchTermChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search,
    searchTermChanged
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
