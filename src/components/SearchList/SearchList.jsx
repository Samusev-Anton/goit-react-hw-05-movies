import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './SearchList.styled';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const SearchList = ({ movies }) => {
  const location = useLocation();

  console.log(movies);
  return (
    <>
      {movies.map(({ title, id, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <img src={`${imgBaceUrl}${poster_path}`} alt={title} />
            <h2>{title}</h2>
          </Link>
        </MovieItem>
      ))}
    </>
  );
};
