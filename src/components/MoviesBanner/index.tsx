import { FC, useState } from "react";
import {NavLink} from 'react-router-dom';
import { Movie } from "../../types";
import './styles.scss';
import Carousel from 'react-bootstrap/Carousel';

type Props = {
      movies: Movie[]
}

const MoviesBanner: FC<Props> = ({ movies }) => {
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
                        <Carousel.Item ><ul className="slider-movies" id={`slider-${i}`}>
                              {moviesArray.map(movie => (

                                    <NavLink className='nav-link' to={`movie/${movie.id}`}>
                                          <li className="slide-item" style={{ backgroundImage: `url(${movie.poster_path})` }} id={`slide-${movie.id}`}></li>
                                    </NavLink>
                              ))}
                        </ul></Carousel.Item>
                  ))}
            </Carousel>
      );
}

export { MoviesBanner }