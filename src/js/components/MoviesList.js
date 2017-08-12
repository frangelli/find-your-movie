import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { } from '../actions';
import MovieListItem from './MovieListItem';

class MoviesList extends Component {

  constructor(props) {
    super(props);
  }

  renderMoviesList() {
    return _.map(this.props.movies, (m) => {
      return (
        <MovieListItem movie={m} key={m.id} />
      );
    });
  }

  render() {
    return (
      <div className="movies-list-wrapper">
        {
          this.props.movies.length > 0 &&
          this.renderMoviesList()
        }
        {
          this.props.searchHasBeenMade && this.props.movies.length === 0 &&
          <div className="no-results">
            <span>Your search did not return any results! Why not to try another term?</span>
          </div>
        }
        {
          !this.props.searchHasBeenMade && this.props.movies.length === 0 &&
          <div className="no-search">
            <span>Search your movie!</span>
          </div>
        }
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    searchTerm: state.searchTerm,
    searchHasBeenMade: state.searchHasBeenMade
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
