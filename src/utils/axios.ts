import axios from 'axios';

const apiFirebase = axios.create({
      baseURL: 'https://peliculasreact-e004e-default-rtdb.firebaseio.com',
});

const apiMovies = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
            api_key : 'd024623a686ac19cfb689c457f73e94e',
      }
});

export {apiFirebase, apiMovies}