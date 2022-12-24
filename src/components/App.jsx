import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound';
import { Loader } from './Loader/Loader';
import { SupportMessage } from './SupportMessage/SupportMessage';
import { Header, Nav, NavItem } from './App.styled';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route index element={<SupportMessage />}></Route>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
