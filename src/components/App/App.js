import './App.css';

import { initialCards, savedCards } from '../../utils/utils';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFouns';

const App = () => {
  const location = useLocation();
  const renderCondition = location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies';

  return (
    <div className="app">
      {renderCondition ? <Header/> : null}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/movies' element={<Movies card={initialCards} textButton='Сохранить'/>}/>
        <Route path='/saved-movies' element={<SavedMovies card={savedCards} textButton='x'/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      {renderCondition ? <Footer/> : null}
    </div>

  )
}

export default App;
