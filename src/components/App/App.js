import './App.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFouns';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import filterSearchSubmit from '../../utils/filter';
import { MOVIE_API_URL, TEXT_ERROR_SERVER } from '../../utils/constants';

const App = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState(((state) => {
    return state = localStorage.getItem('filteredMovies') ? JSON.parse(localStorage.getItem('filteredMovies')).filteredMovies : [];
  }));
  const [filterInpitMovies, setFilterInpitMovies] = useState(((state) => {
    return state = localStorage.getItem('filteredMovies') ? JSON.parse(localStorage.getItem('filteredMovies')).requestText : '';
  }));
  const [isCheckedShortFilm, setIsCheckedShortFilm] = useState(((state) => {
    return state = localStorage.getItem('filteredMovies') ? JSON.parse(localStorage.getItem('filteredMovies')).isChecked : false;
  }));

  const [saveMovies, setSaveMovies] = useState(((state) => {
    return state = localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')).movies : [];
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const [errorServerSavedMovies, setErrorServerSavedMovies] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const renderCondition = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';
  const renderHederByProfile = location.pathname === '/profile';

  const handleBurgerClick = () => {
    setIsOpenBurgerMenu(true);
  }

  const handleBurgerClickClose = () => {
    setIsOpenBurgerMenu(false);
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([data, savedMovies]) => {
          setCurrentUser(data);
          setSaveMovies(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify({
            movies: savedMovies
          }));
        })
        .catch(err => setErrorServerSavedMovies(TEXT_ERROR_SERVER));
    }
  }, [loggedIn]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      mainApi.checkJWT()
        .then(res => {
          if (res){
            setLoggedIn(true);
          }
        })
        .catch(err => {
          console.log(err);
        })
    };
  }, []);

  const handleSaveMovie = (card) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      id,
      nameRU,
      nameEN} = card;

    mainApi.postMovie({
      country,
      director,
      duration,
      year,
      description,
      image: MOVIE_API_URL + image.url,
      trailerLink,
      thumbnail: MOVIE_API_URL + image.formats.thumbnail.url,
      movieId: id,
      nameRU,
      nameEN
    })
      .then(movie => {
        setSaveMovies(saveMovies => [movie, ...saveMovies]);
        localStorage.setItem('savedMovies', JSON.stringify({
          movies: [movie, ...saveMovies]
        }));
      })
      .catch(err => console.log(err));
  };

  const handleDeleteMovies = (movieId) => {
    mainApi.deleteMovie(movieId)
      .then(deleteMovie => {
        const newSaveMovies = JSON.parse(localStorage.getItem('savedMovies')).movies.filter(item => {
          return item._id !== deleteMovie._id;
        });
        localStorage.setItem('savedMovies', JSON.stringify({
          movies: newSaveMovies
        }));
        setSaveMovies(newSaveMovies);
      })
      .catch(err => console.log(err));
  };

  const handleSubmitSearchForm = async (requestText, isChecked) => {
    if (!JSON.parse(localStorage.getItem('movies'))) {
      setIsLoading(true);
      await moviesApi()
        .then(movies => {
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .finally(() => setIsLoading(false))
        .catch(err => {
          setErrorServer(TEXT_ERROR_SERVER);
        });
    }

    const allMovies = await JSON.parse(localStorage.getItem('movies'));
    console.log(allMovies);
    if (allMovies) {
      const filteredMovies = filterSearchSubmit(allMovies, requestText, isChecked)
      localStorage.setItem('filteredMovies', JSON.stringify({
        requestText,
        filteredMovies,
        isChecked,
      }));
      setFilterInpitMovies(requestText);
      setIsCheckedShortFilm(isChecked);
      setMovies(filteredMovies);
    }
  }

  const handleSubmitSearchFormSavedMovies = (requestText, isChecked) => {
    const movies = JSON.parse(localStorage.getItem('savedMovies')).movies;
    if (requestText === '') {
      setSaveMovies(movies);
    } else {
      const filteredMovies = filterSearchSubmit(movies, requestText, isChecked)
      setSaveMovies(filteredMovies);
    }
  }

  const handleUpdateUser = (data) => {
    mainApi.setUserInfo(data)
      .then(res => {
        setCurrentUser(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleRegisterSubmit(data) {
    const {email, password} = data;
    console.log(data);
    setIsLoading(true);
    mainApi.register(data)
      .then((res) => {
        handleLoginSubmit({email, password});
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleLoginSubmit(data) {
    setIsLoading(true);
    mainApi.authorize(data)
      .then((res) => {
        if (res.isLoggedIn) {
          localStorage.setItem('isLoggedIn', res.isLoggedIn)
          setLoggedIn(true);
          navigate('/movies', {replace: true});
          console.log(res)
        }
      })
      .finally(() => setIsLoading(false))
      .catch(err => {
        console.log(err);
      })
  }

  function handleSignOut() {
    mainApi.exit()
      .then(res => {
        setLoggedIn(false);
        localStorage.clear();
        navigate('/', {replace: true});
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {renderCondition || renderHederByProfile ?
          <Header
            handleBurgerClick={handleBurgerClick}
            handleSignOut={handleSignOut}
            handleLoginSubmit={handleLoginSubmit}
            handleRegisterSubmit={handleRegisterSubmit}
            loggedIn={loggedIn}
          />
        :
        null}
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/movies' element={
              <ProtectedRouteElement
                loggedIn = {loggedIn}
                handleSubmitSearchForm={handleSubmitSearchForm}
                initialValue={filterInpitMovies}
                isCheckedShortFilm = {isCheckedShortFilm}
                cards={movies}
                textButton='Сохранить'
                handleSaveMovie = {handleSaveMovie}
                handleDeleteMovies={handleDeleteMovies}
                isLoading={isLoading}
                errorServer={errorServer}
                element={Movies}
              />
            }/>
            <Route path='/saved-movies' element={
              <ProtectedRouteElement
                loggedIn = {loggedIn}
                handleSubmitSearchForm={handleSubmitSearchFormSavedMovies}
                cards={saveMovies}
                handleDeleteMovies={handleDeleteMovies}
                textButton='x'
                errorServer={errorServerSavedMovies}
                element={SavedMovies}
              />
            }/>
            <Route path='/profile' element={
              <ProtectedRouteElement
                handleSignOut={handleSignOut}
                handleUpdateUser={handleUpdateUser}
                isLoading={isLoading}
                loggedIn = {loggedIn}
                element={Profile}
              />
            }/>
            <Route path='/signin' element={<Login handleLoginSubmit={handleLoginSubmit} isLoading={isLoading}/>}/>
            <Route path='/signup' element={<Register handleRegisterSubmit={handleRegisterSubmit} isLoading={isLoading}/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </main>
        {renderCondition ? <Footer/> : null}
        <BurgerMenu isOpen={isOpenBurgerMenu} handleBurgerClickClose={handleBurgerClickClose}/>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
