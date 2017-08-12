const API_KEY = 'b297f7d9637b78310cddfd1b44e7a80f';
const API_BASE_URL = 'https://api.themoviedb.org/3'

export default {
  SEARCH_API_URL: `${API_BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`,
  GET_MOVIE_DETAILS_URL: (movieId) => { return `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&include_adult=false`},
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/original'
};
