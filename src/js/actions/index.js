import axios from 'axios';
import Urls from '../utils/urls.js';

const SEARCH_API_URL = Urls.SEARCH_API_URL;
const GET_MOVIE_DETAILS_URL = Urls.GET_MOVIE_DETAILS_URL;

//action constants
export const APPLICATION_STARTED = 'APPLICATION_STARTED';
export const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';
export const SEARCH = 'SEARCH';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export function applicationStarted() {
  return {
    type: APPLICATION_STARTED
  }
}

export function searchTermChanged(searchTerm) {
  return {
    type: SEARCH_TERM_CHANGED,
    payload: searchTerm
  }
}

export function search(searchTerm) {
  let req = axios.get(`${SEARCH_API_URL}&query=${searchTerm}`);
  return {
    type: SEARCH,
    payload: req
  }
}

export function getMovieDetails(movieId) {
  let req = axios.get(GET_MOVIE_DETAILS_URL(movieId));
  return {
    type: GET_MOVIE_DETAILS,
    payload: req
  }
}
