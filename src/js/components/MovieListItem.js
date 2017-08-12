import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getMovieDetails } from '../actions';

class MovieListItem extends Component {

  constructor(props) {
    super(props);
    this.movie = this.props.movie;
  }

  onMovieSelectHandler() {
    this.props.getMovieDetails(this.movie.id);
  }

  render() {
    return (
      <div className="movie-list-item" onClick={this.onMovieSelectHandler.bind(this)}>
        <span>{this.movie.title}</span>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getMovieDetails
  }, dispatch);
}

function mapStateToProps(state) {
  return {
  };
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
