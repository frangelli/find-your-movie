import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTermChanged, search } from '../actions';

require('./SearchField.scss');
class SearchField extends Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  componentDidMount() {
    const inputField = document.querySelector('.search-field');
    inputField.focus();
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
          <input className="search-field" type="text"
            placeholder="Search your movie by part of the title..."
            onChange={this.onSearchTermChange} />
          <button className="btn-search" type="submit">Search</button>
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
