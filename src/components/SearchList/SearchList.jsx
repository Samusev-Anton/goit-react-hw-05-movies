import { Link } from 'react-router-dom';
import { MovieItem } from './SearchList.styled';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const SearchList = ({ movies }) => {
  console.log(movies);
  return (
    <>
      {movies.map(({ title, id, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`${id}`}>
            <img src={`${imgBaceUrl}${poster_path}`} alt={title} />
            <h2>{title}</h2>
          </Link>
        </MovieItem>
      ))}
    </>
  );
};
