import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'TakeApi';
import { HomeBox } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const responce = await fetchMovies();
        setMovies(responce.results);
      } catch (error) {}
    };
    getMovies();
  }, [setMovies]);

  return (
    <HomeBox>
      <MovieList trends={movies} />
    </HomeBox>
  );
};
