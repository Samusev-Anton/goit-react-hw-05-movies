import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './MovieList.styled';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const MovieList = ({ trends }) => {
  const location = useLocation();
  return (
    <>
      {trends.map(({ title, id, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <img src={`${imgBaceUrl}${poster_path}`} alt={title} />
            <h2>{title}</h2>
          </Link>
        </MovieItem>
      ))}
    </>
  );
};
