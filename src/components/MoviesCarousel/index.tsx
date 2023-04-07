import { FC, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Movie } from "../../types";
import './styles.scss';
import Carousel from 'react-bootstrap/Carousel';

type Props = {
      movies: Movie[]
}

const MoviesCarousel: FC<Props> = ({ movies }) => {
      const group: Movie[][] = [];
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
            setIndex(selectedIndex);
      };


      for (let i = 0; i < movies.length; i += 5) {
            group.push(movies.slice(i, i + 5));
      }

      return (
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                  {group.map((moviesArray, i) => (
                        <Carousel.Item id={`carousel-item-${i}`} ><ul className="slider-movies" id={`slider-${i}`}>
                              {moviesArray.map(movie => (
                                    <NavLink to={`/movie/${movie.id}`} id={`${movie.id}`}>
                                          <li className="slide-item" id={`slide-${movie.id}`}>
                                                <img src={movie.poster_path} alt={movie.title} />
                                          </li>
                                    </NavLink>
                              ))}
                        </ul></Carousel.Item>
                  ))}
            </Carousel>
      );
}

export { MoviesCarousel }