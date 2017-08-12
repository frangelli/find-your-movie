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
      overview: m.overview,
      release_date: m.release_date,
      vote_average: m.vote_average,
    }
  });
}
