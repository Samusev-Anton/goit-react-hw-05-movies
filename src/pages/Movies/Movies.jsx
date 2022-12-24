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
} from './Movies.styled';

export const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
      //   console.log(responce.results);
    } catch (error) {}
  };

  return (
    <>
      <SearchBar>
        <SesrchForm onSubmit={handleSubmit}>
          <SearchFormInput
            type="text"
            value={searchName}
            name="name"
            onChange={handleInputChange}
          />
          <SearchFormButton type="submit">
            <ImSearch />
            <span>Search</span>
          </SearchFormButton>
        </SesrchForm>
      </SearchBar>
      <MovieBox>{movie.length > 0 && <SearchList movies={movie} />}</MovieBox>
    </>
  );
};
