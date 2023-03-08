import { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Movie } from '../../types';

type Props = {
      movies: Movie[];
}

const MoviesCarousel: FC<Props> = ({ movies }) => {
      return (
            <Carousel>
                  {movies.map(movie => <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src="holder.js/800x400?text=First slide&bg=373940"
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>{movie.title}</h3>
                              <p></p>
                        </Carousel.Caption>
                  </Carousel.Item>)}
            </Carousel>
      );
}

export { MoviesCarousel };