import { Link } from 'react-router-dom';
import { MovieItem } from './MovieList.styled';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const MovieList = ({ trends }) => {
  return (
    <>
      {trends.map(({ title, id, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`movies/${id}`}>
            <img src={`${imgBaceUrl}${poster_path}`} alt={title} />
            <h2>{title}</h2>
          </Link>
        </MovieItem>
      ))}
    </>
  );
};
