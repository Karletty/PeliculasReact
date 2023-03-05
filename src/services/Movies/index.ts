import { apiMovies } from '../../utils/axios';
import { UPCOMING_ENDPOINT, POPULAR_ENDPOINT, TOP_RATED_ENDPOINT } from '../../constants/index';

const get = async (endpoint: string) => {
      const response = await apiMovies.get(endpoint);
      const data = response.data;
      const results = data.results;
      return results;
}

const getUpcoming = async () => {
      return get(UPCOMING_ENDPOINT);
}

const getPopular = async () => {
      return get(POPULAR_ENDPOINT);
}

const getTopRated = async () => {
      return get(TOP_RATED_ENDPOINT);
}


export const moviesServices = { getUpcoming, getPopular, getTopRated };