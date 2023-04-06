import { Movie } from "../types";
import { apiMovies } from "../utils/axios";

const getMovies = async (endpoint: string) => {
      const response = await apiMovies.get(endpoint);
      const movies = response.data.results as Movie[];
      const modifiedMovies = movies.map(movie => {
            return ({
                  ...movie,
                  poster_path: 'https://image.tmdb.org/t/p/original' + movie.poster_path,
                  backdrop_path: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path
            })
      });
      return modifiedMovies;
}

const getPopular = async () => {
      return getMovies('/movie/popular?region=sv&language=es');
}

const getTopRated = async () => {
      return getMovies('/movie/top_rated?region=sv&language=es');
}

const getUpcoming = async () => {
      return getMovies('/movie/upcoming?region=sv&language=es');
}

const search = async (title: string) => {
      return getMovies(`/search/movie?query=${title}&language=es`);
}

const getGenres = async () => {
      const response = await apiMovies.get('/genre/movie/list?language=es');
      return response.data.results as Movie[];
}

export const servicesMovies = { getPopular, getTopRated, getUpcoming, getGenres, search };