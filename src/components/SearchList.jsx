import { Link } from 'react-router-dom';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w400';

export const SearchList = ({ movies }) => {
  console.log(movies);
  return (
    <>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id}>
          <Link to={`${id}`}>
            <h2>{title}</h2>
            <img src={`${imgBaceUrl}${poster_path}`} alt={title} />
          </Link>
        </li>
      ))}
    </>
  );
};
