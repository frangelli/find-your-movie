import moviesExtractor from '../utils/moviesExtractor';
import { movieDetailsExtractor } from '../utils/moviesExtractor';

const defaultState = {
  searchTerm: '',
  movies: [],
  searchHasBeenMade: false,
  selectedMovieDetails: {}
};

import {
  APPLICATION_STARTED,
  SEARCH_TERM_CHANGED,
  SEARCH,
  GET_MOVIE_DETAILS
} from '../actions';

export default (state = defaultState, action) => {
  let movies = [];
  let selectedMovieDetails = {};

  switch (action.type) {

    case APPLICATION_STARTED:
      console.log('APPLICATION_STARTED');
      return state;

    case SEARCH_TERM_CHANGED:
      return Object.assign({}, state, {searchTerm: action.payload, searchHasBeenMade: false});

    case SEARCH:
      movies = (action.payload.data && action.payload.data.results) ? moviesExtractor(action.payload.data.results) : [];
      return Object.assign({}, state, {movies, searchHasBeenMade: true});

    case GET_MOVIE_DETAILS:
      selectedMovieDetails = (action.payload.data) ? movieDetailsExtractor(action.payload.data) : {};
      return Object.assign({}, state, {selectedMovieDetails: selectedMovieDetails});

    default:
      return state;
  }
}
