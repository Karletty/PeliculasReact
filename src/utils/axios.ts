import axios from "axios";

const apiMovies = axios.create({
      baseURL: 'https://api.themoviedb.org/3/movie/',
      params: {
            api_key: 'd024623a686ac19cfb689c457f73e94e'
      }
});

const apiFirebase = axios.create({
      baseURL: 'https://peliculasreact-e004e-default-rtdb.firebaseio.com/',
});

export { apiMovies, apiFirebase };