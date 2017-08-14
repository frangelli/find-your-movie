import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getMovieDetails } from '../actions';
import Header from './Header';

require('./DetailsView.scss');
class DetailsView extends Component {

  constructor(props) {
    super(props);
    this.movieId = this.props.match.params.movieId;
  }

  componentDidMount() {
    if (!this.props.match.params.movieId) {
      this.props.history.goBack();
      return;
    }
    this.props.getMovieDetails(this.movieId);

  }

  render() {
    if (!this.props.selectedMovieDetails.id) {
      return (<div></div>);
    }
    return (
      <div className="main">
        <Header />
        <div className="movie-details">
          <img src={this.props.selectedMovieDetails.poster_url}/>
          <div className="movie-info">
            <span className="movie-title">{this.props.selectedMovieDetails.title}</span>
            <h2>Overview</h2>
            <span className="movie-overview">
              {this.props.selectedMovieDetails.overview}
            </span>
            <h2>Genres</h2>
            <span className="movie-overview">
              {this.props.selectedMovieDetails.genres.join()}
            </span>
            <h2>Votes</h2>
            <span className="movie-rate"><i className="fa fa-star"></i> {this.props.selectedMovieDetails.vote_average}</span>
            <h2>Year</h2>
            <span className="release-date"><i className="fa fa-calendar"></i> {this.props.selectedMovieDetails.release_date}</span>
          </div>
        </div>
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
    selectedMovieDetails: state.selectedMovieDetails
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsView));
