import { useEffect, useState } from "react";
import { Movie } from "../../types";
import { servicesMovies } from "../../services/movies";
import { MoviesCarousel } from "../../components";

const Dashboard = () => {
      const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

      useEffect(() => {
            servicesMovies.getPopular().then(data => {
                  setPopularMovies(data);
            })
      }, [])

      return (
            <>
                  <h1>Dashboard</h1>
                  <MoviesCarousel movies={popularMovies} />
            </>
      );
}

export { Dashboard }