import _ from 'lodash';
import Urls from './urls';

export default function moviesExtractor(data) {
  if (!data || data.length === 0) {
    return [];
  }

  return _.map(data, (m) => {
    return {
      id: m.id,
      backdrop_url: (m.backdrop_path !== "") ? `${Urls.IMAGE_BASE_URL}${m.backdrop_path}` : null,
      poster_url: (m.poster_path !== "") ? `${Urls.IMAGE_BASE_URL}${m.poster_path}` : null,
      original_language: m.original_language,
      title: m.title,
      mini_title: _.truncate(m.title, {length: 50}),
      mini_overview: _.truncate(m.overview, {length: 100}),
      overview: m.overview,
      release_date: m.release_date.split('-')[0],
      vote_average: m.vote_average,
    }
  });
}

export function movieDetailsExtractor(m) {
  return {
    id: m.id,
    backdrop_url: (m.backdrop_path !== "") ? `${Urls.IMAGE_DETAILS_BASE_URL}${m.backdrop_path}` : null,
    poster_url: (m.poster_path !== "") ? `${Urls.IMAGE_DETAILS_BASE_URL}${m.poster_path}` : null,
    original_language: m.original_language,
    title: m.title,
    tagline: m.tagline,
    genres: _.map(m.genres, (g) => {return g.name}),
    overview: m.overview,
    release_date: m.release_date.split('-')[0],
    vote_average: m.vote_average,
    imdb_id: m.imdb_id,
    homepage: m.homepage
  };
}
