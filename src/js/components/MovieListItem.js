import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

require('./MovieListItem.scss');
class MovieListItem extends Component {

  constructor(props) {
    super(props);
    this.movie = this.props.movie;
    this.state = {
      mouseOver: false
    }
    this.overTimeout = null;
  }

  onMovieSelectHandler() {
    this.props.history.push(`/details/${this.movie.id}`);
  }

  onMovieMouseOverHandler(evt) {
    // here we're taking care of the
    // real over intent
    this.overTimeout = setTimeout(()=>{
      this.setState({mouseOver: true});
    },300);
    evt.target.addEventListener('mouseout', () => {
      this.setState({mouseOver: false});
      clearInterval(this.overTimeout);
    });

  }

  render() {
    return (
      <div className={`movie-list-item ${this.state.mouseOver ? 'mouse-over' : ''}`}
        onClick={this.onMovieSelectHandler.bind(this)}
        onMouseOver={this.onMovieMouseOverHandler.bind(this)}>
        <img src={this.movie.poster_url}/>
        <div className="movie-info">
          <span className="movie-title">{this.movie.mini_title}</span>
          <span className="movie-overview">{this.movie.mini_overview}</span>
          <span className="movie-rate"><i className="fa fa-star"></i> {this.movie.vote_average}</span>
          <span className="release-date"><i className="fa fa-calendar"></i> {this.movie.release_date}</span>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.overTimeout);
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

function mapStateToProps(state) {
  return {
  };
}

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieListItem));
