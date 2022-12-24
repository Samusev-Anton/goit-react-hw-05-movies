import { SearchList } from 'components/SearchList/SearchList';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovie } from 'TakeApi';
import {
  SearchBar,
  SesrchForm,
  SearchFormButton,
  SearchFormInput,
  MovieBox,
  SearchFormButtonLabel,
} from './Movies.styled';

const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  const handleInputChange = event => {
    const newSearchName = event.currentTarget.value.toLowerCase();
    setSearchName(newSearchName);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      console.log('введите данные для поиска');
      return;
    }
    setSearchParams(searchName !== '' ? { query: searchName } : {});
    // const getParams = useParams.get(searchParams);
    console.log(searchParams);
    getMovies(searchName);
    setSearchName('');
  };

  const getMovies = async searchName => {
    try {
      const responce = await fetchSearchedMovie(searchName);
      setMovie(responce.results);
      setIsLoading(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <SearchBar>
        <SesrchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            value={searchName}
            name="name"
            placeholder="Search films"
            onChange={handleInputChange}
          />
          <SearchFormButton type="submit">
            <ImSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
        </SesrchForm>
      </SearchBar>
      <MovieBox>
        {error && <p>Something went wrong, try reloading the page</p>}
        {movie.length === 0 && <p>Nothing found for your request</p>}
        {movie.length > 0 && isLoading && !error && (
          <SearchList movies={movie} />
        )}
      </MovieBox>
    </>
  );
};

export default Movies;
